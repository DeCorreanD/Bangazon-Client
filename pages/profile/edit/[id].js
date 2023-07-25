import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSingleUser } from '../../../utils/data/userData';
import RegisterForm from '../../../components/RegisterForm';
import { useAuth } from '../../../utils/context/authContext';

export default function EditUser() {
  const router = useRouter();
  const { id } = router.query;
  const [editUser, setEditUser] = useState({});
  const { user, updateUser } = useAuth();
  useEffect(() => {
    getSingleUser(user
      .id).then((obj) => {
      setEditUser(obj);
    });
  }, [id, user.id]);
  return (
    <>
      <Head>
        <title>Edit User</title>
      </Head>
      <div>
        <RegisterForm user={editUser} updateUser={updateUser} />
      </div>
    </>
  );
}