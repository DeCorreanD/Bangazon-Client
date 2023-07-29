/* eslint-disable @next/next/no-img-element */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import React from 'react';

const OrderProduct = ({
  orderIdName, productIdName, productIdPrice, productIdImage, productIdDescription, customerImage,
}) => (
  <>
    <Card style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={customerImage}
        alt="orderimage"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50px',
        }}
      />
      <img
        src={productIdImage}
        alt="orderimage"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50px',
        }}
      />
      <Card.Header>User Name: {orderIdName}</Card.Header>
      <Card.Header>Product Name: {productIdName}</Card.Header>
      <Card.Body>
        <Card.Title>${productIdPrice}</Card.Title>
        <Card.Text>About Product:{productIdDescription}</Card.Text>
      </Card.Body>
    </Card>
  </>
);

OrderProduct.propTypes = {
  orderIdName: PropTypes.string.isRequired,
  productIdName: PropTypes.string.isRequired,
  productIdPrice: PropTypes.number.isRequired,
  productIdImage: PropTypes.string.isRequired,
  productIdDescription: PropTypes.string.isRequired,
  customerImage: PropTypes.string.isRequired,
};
export default OrderProduct;
