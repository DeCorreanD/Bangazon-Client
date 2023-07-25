import { clientCredentials } from '../client';

const getUsers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleUser = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(console.warn('getSingle', id))
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/user.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateUserProfile = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(console.warn('update user', payload.id))
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user/${uid}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// eslint-disable-next-line import/prefer-default-export
export {
  getUsers,
  getSingleUser,
  createUser,
  updateUserProfile,
  deleteUser,
};
