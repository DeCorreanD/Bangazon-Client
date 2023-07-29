import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getOrder } from '../../utils/data/orderData';
import OrderCard from '../../components/order/OrderCard';

function OrderPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const showOrders = () => {
    getOrder().then((data) => setOrders(data));
  };

  useEffect(() => {
    showOrders();
  }, []);

  // Filter the orders to show only the ones that belong to the current user
  const currentUserOrders = orders.filter((order) => order.customer_id.id === user?.id);

  return (
    <>
      <div className="order-card">
        <div className="mt-5 d-flex flex-wrap">
          {currentUserOrders.map((order) => (
            <section key={`order--${order.id}`}>
              <OrderCard id={order.id} date={order.date} customerId={order.customer_id.name} customerImage={order.customer_id.image} onUpdate={showOrders} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
