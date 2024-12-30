import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Product({ img, Title, price }) {
  return (
    <div>
      <Card style={{ width: '18rem', marginBottom: '16px' }}>
        {img ? (
          <Card.Img variant="top" src={img} alt={Title} style={{ height: '200px', objectFit: 'cover' }} />
        ) : (
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        )}
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            Price: ${price.toFixed(2)}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Buy Now for ${price.toFixed(2)}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

// PropTypes validation
Product.propTypes = {
  img: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
