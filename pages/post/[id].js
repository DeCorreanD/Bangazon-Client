/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { FaTrash, FaCartPlus, FaEdit } from 'react-icons/fa';
import { getSingleProduct, deleteProduct } from '../../utils/data/productData';
import { useAuth } from '../../utils/context/authContext';

const ViewProduct = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState({});
  const { id } = router.query;
  const { user } = useAuth();
  const deleteThisProduct = () => {
    if (window.confirm('Delete Product?')) {
      deleteProduct(id).then(() => {
        console.warn('Product Deleted'); // Log the message to the console (optional)
        router.push('/'); // Redirect to the home page
      });
    }
  };

  useEffect(() => {
    getSingleProduct(id).then((productData) => {
      setProductDetails(productData);
    });
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <h3>Item Name: {productDetails.name}</h3>
          <img src={productDetails.image} alt="productimage" style={{ width: '200px' }} />
          <h5>Description: {productDetails.description}</h5>
          <p>Qty: {productDetails.quantity}</p>
          <p>Price: ${productDetails.price}</p>
        </div>
      </div>
      <div className="d-flex">
        {console.warn(user)}
        {console.warn(productDetails)}
        {user && productDetails && user.id === productDetails.seller_id?.id ? (
          <>
            {/* Sellers View */}

            <Button
              style={{ margin: '10px', backgroundColor: '#003049' }}
              onClick={() => {
                router.push(`/post/edit/${id}`);
              }}
            >
              <FaEdit />
            </Button>
            <Button style={{ margin: '10px', backgroundColor: '#003049' }} onClick={deleteThisProduct}>
              <FaTrash />
            </Button>
          </>
        ) : user && !user.isseller ? ( // Customer View: Show the "Add To Cart" button only for customers (isseller is false)
          <Button
            onClick={() => {
              router.push('/cart');
            }}
            style={{
              margin: '10px',
              backgroundColor: '#6699CC',
              fontSize: '10px',
              width: '90px',
            }}
          >
            <FaCartPlus />
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default ViewProduct;
