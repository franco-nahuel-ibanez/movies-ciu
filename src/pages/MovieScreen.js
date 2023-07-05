import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovies } from '../services/fetchMovies'
import { IMAGE_URL } from '../constants/urls'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ArrowLeft, StarFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const MovieScreen = () => {
  const { type, id } = useParams()
  const [movie, setMovie] = useState({})
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovies(`${type}/${id}`);
      setMovie(data);
    };
  
    const getFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem('favoritas')) || [];
      setFavorites(storedFavorites);
    };
  
    getMovie();
    getFavorites();
  }, [type, id]);

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const handleAddToFavorites = () => {
    if (!isFavorite()) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem('favoritas', JSON.stringify(updatedFavorites));
    }
  };

  const isFavorite = () => {
    return favorites.some(favorite => favorite.id === movie.id);
  };

  return (
    <Container fluid className='w-75'>
      <Row className='my-3'>
        <Col className='d-flex justify-content-end'>
        <i className="bi bi-1-square"></i>
          <Button
            onClick={handleBack}
            variant="outline-dark"
            className='d-flex align-items-center gap-2'>
              <ArrowLeft />
              Back
            </Button>
        </Col>
      </Row>

      <Row className='my-3'>
        <Col>      
          <h1 className='text-center text-uppercase fs-1 fw-bold'>
            {movie.original_title || movie.original_name}
          </h1>
          { movie.tagline && (
            <h3 className='text-center fs-3'>
              {movie.tagline}
            </h3>
          )}
        </Col>
      </Row>

      <Row className='my-3'>
        <Col>
          {
            isFavorite(movie.id)
            ? ( <Badge bg='warning'>Favorita <StarFill size={15}/> </Badge> )
            : (<Button onClick={handleAddToFavorites} variant='outline-dark' className='d-flex align-items-center gap-2'>
                Agregar a favoritos
                <StarFill />
              </Button>)
          }
        </Col>
      </Row>
      
      <Row>
        <Col xs={12} md={6}>
          <img
            src={ IMAGE_URL + movie.poster_path }
            alt={movie.original_title || movie.original_name}
            className='img-fluid mb-3 border border-dark rounded shadow'
          />
        </Col>

        <Col xs={12} md={6}>
          <p>
            <strong>Fecha de lanzamiento: </strong>
            <Badge bg="dark">{movie.release_date || movie.first_air_date}</Badge>
          </p>

          <p>
            <strong>Calificación: </strong>
            <Badge bg="dark">{movie.vote_average}</Badge>             
          </p>

          {
            movie.production_countries && (
              <Col className='d-flex gap-3 my-2'>
                <strong>Pais:</strong>
                  {
                    movie.production_countries.map((country) => (
                      <Badge key={country.iso_3166_1} bg="dark">{country.name}</Badge>
                    ))
                  }
              </Col>
            )
          }

          {
            movie.genres && (
              <Col className='d-flex gap-3 flex-wrap'>
                <strong>Generos:</strong>
                  {
                    movie.genres && movie.genres.map((genre) => (
                      <Badge key={genre.id} bg="dark">{genre.name}</Badge>
                    ))
                  }
              </Col>
            )
          }
            
          <p><strong>Productoras:</strong></p>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap'
            }}
          >
            {
              movie.production_companies && movie.production_companies.map((company) => {
                if (company.logo_path) {
                  return (
                    <li key={company.id}>
                      <img
                        src={IMAGE_URL + company.logo_path }
                        alt={company.name}
                        className='img-fluid mb-3 border border-gray rounded shadow w-50'
                      />
                    </li>
                  )
                }
              })
            }
          </ul>

          {
            movie.number_of_episodes && (
              <p>
                <strong>Episodios: </strong>
                <Badge bg='dark'>{movie.number_of_episodes}</Badge>
              </p>
            )
          }

          {
            movie.number_of_seasons && (
              <p>
                <strong>Temporadas: </strong>
                <Badge bg="dark">{movie.number_of_seasons}</Badge>
              </p>
            )
          }

          <img
            src={ IMAGE_URL + movie.backdrop_path }
            alt='loading'
            className='img-fluid mb-3 rounded shadow'
          />
        </Col>
      </Row>

      <Row
        className='my-3 p-2 rounded shadow'
        style={{
          backgroundColor: '#f5f5f5',
        }}
      >
        <Col>
          <h3>Sinopsis</h3>
          <p>{movie.overview}</p>
        </Col>
      </Row>


    </Container>
  )
}

export default MovieScreen