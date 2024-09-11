import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = ({productId}) => {
    console.log(productId)
    const [deleteProduct, { data, isLoading, error}] = useDeleteProductMutation();
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error.message}</p>
    }
    const handleDeleteProduct = async () => {
       try{
           await deleteProduct(productId);
       }
       catch (e) {
            console.error(e);
       }
    }
  return (
    <div>
        <h1>Delete Product</h1>
        
        <h3>{data?.title ? `${data.title} successfully deleted`: ''}</h3>
        <button onClick={handleDeleteProduct}>Delete Product</button>

    </div>
  )
}

export default DeleteProduct