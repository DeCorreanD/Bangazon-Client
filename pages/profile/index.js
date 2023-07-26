/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { FaEdit, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../utils/context/authContext';
import { signOut } from '../../utils/auth';
import { getProductsBySellerId } from '../../utils/data/productData';
import ProductCard from '../../components/product/ProductCard';

const Profile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [sellerProducts, setSellerProducts] = useState([]);

  const showProducts = () => {
    getProductsBySellerId(user.id).then((data) => setSellerProducts(data));
  };

  useEffect(() => {
    showProducts();
  }, [user]);

  // Function to check if the user is a seller
  const isSeller = () => user && user.isseller;

  return (
    <>
      <div className="" style={{ justifyContent: 'center' }}>
        <p>
          <img src={user.image} alt={user.name} style={{ width: '300px', borderRadius: '50px' }} />
        </p>
        <h1>Name: {user.name}</h1>
        <h2>Bio: {user.bio}</h2>

        {isSeller() ? ( // Render buttons based on the isSeller() function
          <>
            <Button
              size="sm"
              variant="warning"
              onClick={() => {
                router.push('/post/new');
              }}
            >
              <FaPlus />
            </Button>
            <Button
              size="sm"
              variant="success"
              onClick={() => {
                router.push(`/profile/edit/${user.id}`);
              }}
            >
              <FaEdit />
            </Button>
          </>
        ) : (
          <div>
            <Button
              size="sm"
              variant="success"
              onClick={() => {
                router.push(`/profile/edit/${user.id}`);
              }}
            >
              <FaEdit />
            </Button>
          </div>
        )}

        <Button size="sm" variant="danger" onClick={signOut}>
          <FaSignOutAlt />
        </Button>

        {isSeller() && (
          <>
            <h1>
              <u>Inventory</u>
            </h1>
            <div className="mt-5 d-flex flex-wrap">
              {/* Render sellerProducts */}
              {sellerProducts.map((product) => (
                <section key={`product--${product.id}`} className="product">
                  <ProductCard id={product.id} sellerId={product.seller_id} name={product.name} description={product.description} quantity={product.quantity} price={product.price} image={product.image} onUpdate={showProducts} />
                </section>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
