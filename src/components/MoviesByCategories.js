import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { fetchMovies } from '../services/fetchMovies';

const MoviesByCategories = ({ section, category, type }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(category);
      setMovies(data.results);
    };
    getMovies();
  }, [category]);


  return (
    <Container fluid className='w-75'>
      <h2>{section}</h2>
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
                type={type}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MoviesByCategories;
