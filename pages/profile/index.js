/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { signOut } from '../../utils/auth';

const Profile = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook
  const router = useRouter();

  return (
    <>
      <p>
        <img src={user.image} alt={user.name} />
      </p>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
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
    </>
  );
};

export default Profile;
