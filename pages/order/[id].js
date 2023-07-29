import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../utils/context/authContext';
import { getOrderProduct } from '../../utils/data/orderproductData';
import OrderProduct from '../../components/order/OrderProduct';

const ViewOrderProduct = () => {
  const [orderProductDetails, setOrderProductDetails] = useState([]);
  // const { user } = useAuth();

  const showOrderProduct = () => {
    getOrderProduct().then((data) => setOrderProductDetails(data));
  };
  useEffect(() => {
    showOrderProduct();
  }, []);
  console.warn(getOrderProduct);
  return (
    <>
      <div className="order-product-card">
        <div className="mt-5 d-flex flex-wrap">
          {orderProductDetails.map((orderProduct) => (
            <section key={`orderProduct--${orderProduct.id}`}>
              <OrderProduct id={orderProduct.id} orderIdName={orderProduct.order_id.customer_id.name} productIdName={orderProduct.product_id.name} productIdPrice={orderProduct.product_id.price} productIdImage={orderProduct.product_id.image} productIdDescription={orderProduct.product_id.description} customerImage={orderProduct.order_id.customer_id.image} onUpdate={setOrderProductDetails} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
export default ViewOrderProduct;
