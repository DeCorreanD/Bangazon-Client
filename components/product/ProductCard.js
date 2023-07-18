/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
// import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { deleteProduct } from '../../utils/data/productData';

const ProductCard = ({
  id,
  name,
  description,
  quantity,
  price,
  image,
}) => {
  const deleteThisPost = () => {
    if (window.confirm('Delete Product?')) {
      deleteProduct(id).then(() => {
        ('Product Deleted');
      });
    }
  };
  // const router = useRouter();

  return (
    <>
      <Card className="text-center">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <img src={image} alt="postimage" style={{ width: '200px' }} />
          <Card.Title>Description: {description}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">Quantity: {quantity}</Card.Footer>
        <Button onClick={deleteThisPost}> Delete Product</Button>
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
