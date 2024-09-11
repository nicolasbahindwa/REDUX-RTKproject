import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {
    const [AddNewProduct, {data, error, isLoading}] = useAddNewProductMutation()
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error.message}</p>
    }
    const handleAddProduct = async () => {
        try{
            const newProductData = {
                id: 2232121,
                title: 'Amazon T-shirt',
                description: 'Amazon T-shirt for amazo developers'
            };
            await AddNewProduct(newProductData)
        }
        catch(err){
            console.error(err)
        }
    };

    
  return (
    <div>
        <h1>AddNewProduct</h1>


        <button onClick={handleAddProduct} disabled={isLoading}>Add new product here</button>

        <h2>pruduct added</h2>
        <p>{data?.id}</p>
        <p>{data?.title}</p>
        <p>{data?.description}</p>

    </div>
  )
}

export default AddNewProduct