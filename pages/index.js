import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getProduct } from '../utils/data/productData';
import ProductCard from '../components/product/ProductCard';

function Home() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const showProducts = () => {
    getProduct().then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
  }, []);
  return (
    <>
      <div
        className=""
      >
        {console.warn(products)}
        {console.warn(user)}

        <div className="mt-5 d-flex flex-wrap">
          {products.map((product) => (
            <section key={`product--${product.id}`}>
              <ProductCard id={product.id} name={product.name} description={product.description} image={product.image} quantity={product.quantity} price={product.price} onUpdate={showProducts} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
