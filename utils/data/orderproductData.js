import { clientCredentials } from '../client';

const getOrderProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderproduct`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${id}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const getSingleOrderProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderproduct/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrderProduct = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderproduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const updateOrderProduct = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderproduct/${order.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteOrderProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderproduct/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getOrderProduct, deleteOrderProduct, createOrderProduct, updateOrderProduct, getSingleOrderProduct,
};
