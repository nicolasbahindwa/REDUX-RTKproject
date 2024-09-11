import React, { useState } from 'react';
import { useUpdateProductMutation, useGetProductByIdQuery } from '../app/service/dummyData';

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const { data: product, isLoading, isError, error, refetch } = useGetProductByIdQuery(productId);
  const [updatedData, setUpdatedData] = useState(null);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        id: productId,
        title: 'Corola SUV',
        description: 'Japanese new generation Corola SUV car, manufactured in 2020 with military technology.',
      };

      const result = await updateProduct({
        id: productId,
        updateProduct: updatedProductData,
      }).unwrap();
      
      setUpdatedData(result);
      refetch(); // Force a refetch of the product data
    } catch (e) {
      console.log("Error failing to update", e);
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <button onClick={handleUpdateProduct} disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Update product'}
      </button>
      
      <h2>Current Product Data:</h2>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      
      {updatedData && (
        <>
          <h2>Updated Product Data:</h2>
          <h4>{updatedData.title}</h4>
          <p>{updatedData.description}</p>
        </>
      )}
    </div>
  );
};

export default UpdateProduct;