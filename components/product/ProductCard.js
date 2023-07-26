/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({
  id,
  name,
  description,
  quantity,
  price,
  image,
}) => {
  const router = useRouter();

  return (
    <>
      <Card className="d-flex flex-wrap" style={{ width: '15rem', margin: '6px', justifyContent: 'center' }}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <img src={image} alt="postimage" style={{ width: '200px' }} />
          <Card.Title>Description: {description}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">Quantity: {quantity}</Card.Footer>
        <>
          <Button
            className="product-card-button"
            onClick={() => {
              router.push(`/post/${id}`);
            }}
          >
            Product Details
          </Button>
        </>
      </Card>
    </>
  );
};
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
