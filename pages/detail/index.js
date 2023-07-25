/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../../utils/context/authContext';

const DetailPage = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook

  return (
    <>
      <p>
        <img src={user.image} alt={user.name} />
      </p>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </>
  );
};

export default DetailPage;
