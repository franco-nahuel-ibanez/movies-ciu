import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import { MOVIE } from '../constants/type'
import { TrashFill } from 'react-bootstrap-icons'


const FavoritesScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const favorites = JSON.parse(localStorage.getItem('favoritas')) || []
      setMovies(favorites)
    };

    getMovies();
  }, []);

  const footer = (id) => {
    return (
      <div
        className='my-4'
        style={{ display: "flex", justifyContent: "center"}}
      >
        <Button
          variant="outline-danger"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={() => handleDelete(id)}
        >
          <TrashFill />
          Eliminar
        </Button>
      </div>
    )
  }

  const handleDelete = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favoritas')) || []
    const newFavorites = favorites.filter(favorite => favorite.id !== id)
    localStorage.setItem('favoritas', JSON.stringify(newFavorites))
    setMovies(newFavorites)
  }


  return (
    <Container 
      fluid
      className='w-75'
      style={{
        marginBottom: "100px"
      }}  
    >
      <h2>Favoritas</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={6}>
        {
          movies && movies.map((movie) => (
            <Col
              className="my-2"
              key={movie.id}
            >
              <MovieCard
                id={movie.id}
                image={movie.poster_path}
                title={movie.original_title || movie.original_name}
                type={MOVIE}
                footer={footer}
              />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default FavoritesScreen