/* eslint-disable @next/next/no-img-element */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { FaInfoCircle } from 'react-icons/fa';

const OrderCard = ({ date, customerId, customerImage }) => {
  const router = useRouter();
  const { id } = router.query;
  console.warn(customerId);
  return (
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
        <Card.Body>
          <Card.Header>Customers Name {customerId}</Card.Header>
          <Card.Footer> Date Of Order: {date}</Card.Footer>
        </Card.Body>
        <Button
          variant="primary"
          onClick={() => {
            router.push(`/order/${id}`);
          }}
        >
          <FaInfoCircle />
        </Button>
      </Card>
    </>
  );
};
OrderCard.propTypes = {
  date: PropTypes.string.isRequired,
  customerId: PropTypes.string.isRequired,
  customerImage: PropTypes.string.isRequired,
};
export default OrderCard;
