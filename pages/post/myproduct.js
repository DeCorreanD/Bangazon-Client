/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import ProductCard from '../../components/product/ProductCard';
import { getUsers } from '../../utils/data/userData';

function MyProduct() {
  const { user } = useAuth();
  const [myProducts, setMyProducts] = useState([]);
  const router = useRouter();

  const showMyProducts = () => {
    getUsers(user.id).then((data) => setMyProducts(data));
  };
  useEffect(() => {
    showMyProducts();
  }, []);
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        {console.warn(myProducts)}
        {console.warn(user)}

        <Button
          onClick={() => {
            router.push('/post/new');
          }}
        >
          Register New Product
        </Button>
        <div className="d-flex flex-wrap">
          {myProducts.map((myProduct) => (
            <section key={`myProduct--${myProduct.id}`} className="post">
              <ProductCard id={myProduct.id} name={myProduct.name} description={myProduct.description} image={myProduct.image} quantity={myProduct.quantity} price={myProduct.price} onUpdate={showMyProducts} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
export default MyProduct;
