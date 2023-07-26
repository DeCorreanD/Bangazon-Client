/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

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
      <Card
        className="product-card"
        style={{
          width: '15rem',
          marginTop: '40px',
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'flex',
        }}
      >
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <img src={image} alt="postimage" style={{ width: '200px', height: '200px' }} />
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Quantity: {quantity}</Card.Footer>
        <>
          <Button
            variant="primary"
            onClick={() => {
              router.push(`/post/${id}`);
            }}
          >
            <FaInfoCircle />
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
