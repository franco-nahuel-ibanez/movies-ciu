import Card from 'react-bootstrap/Card';
import { IMAGE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, image, title, type, footer }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${type}/${id}`);
  }

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={IMAGE_URL + image}
          alt={`poster de pelicula: ${title}`}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <Card.Body>
          <Card.Text>
            <span
              className="d-inline-block text-truncate"
              style={{ maxWidth: "100%" }}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={title}
            >
              {title}
            </span>
          </Card.Text>
        </Card.Body>
        {
          footer && (
            <Card.Footer>
              {footer(id)}
            </Card.Footer>
          )
        }
      </Card>
    </>
  );
}

export default MovieCard;