/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { signOut } from '../../utils/auth';
import { getProductsBySellerId } from '../../utils/data/productData';
import ProductCard from '../../components/product/ProductCard';

const Profile = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook
  const router = useRouter();
  const [sellerProducts, setSellerProducts] = useState([]);

  const showProducts = () => {
    getProductsBySellerId(user.id).then((data) => setSellerProducts(data));
  };

  useEffect(() => {
    showProducts();
  }, [user]);

  return (
    <>
      <p>
        <img src={user.image} alt={user.name} style={{ width: '300px' }} />
      </p>
      <h1>Name: {user.name}</h1>
      <p>Bio: {user.bio}</p>
      <Button
        onClick={() => {
          router.push(`/profile/edit/${user.id}`);
        }}
      >
        Edit User
      </Button>
      <Button variant="danger" onClick={signOut}>
        Sign Out
      </Button>
      <h2>
        <u>Inventory</u>
      </h2>
      {sellerProducts.map((product) => (
        <section key={`product--${product.id}`} className="product">
          <ProductCard id={product.id} sellerId={product.seller_id} name={product.name} description={product.description} quantity={product.quantity} price={product.price} image={product.image} onUpdate={showProducts} />
        </section>
      ))}
    </>
  );
};

export default Profile;
