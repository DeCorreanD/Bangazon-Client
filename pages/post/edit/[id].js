import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../../../utils/data/productData';
import ProductForm from '../../../components/product/ProductForm';

export default function EditProductPage() {
  const [editProduct, setEditProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setEditProduct);
  }, [id]);
  return (
    <>
      <Head>
        <title>Edit Product</title>
      </Head>
      <div>
        <ProductForm obj={editProduct} />
      </div>
    </>
  );
}
