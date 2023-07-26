import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { getProduct } from '../utils/data/productData';
import ProductCard from '../components/product/ProductCard';

function Home() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const showProducts = () => {
    getProduct().then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
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
        {console.warn(products)}
        {console.warn(user)}
        <h1>Time To Buy Products {user.fbUser.displayName}! </h1>
        <p>Below are the available items, have fun!</p>

        <Button
          onClick={() => {
            router.push('/post/new');
          }}
        >
          Register New Product
        </Button>
        <div className="d-flex flex-wrap">
          {products.map((product) => (
            <section key={`product--${product.id}`} className="post">
              <ProductCard id={product.id} name={product.name} description={product.description} image={product.image} quantity={product.quantity} price={product.price} onUpdate={showProducts} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
