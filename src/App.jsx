import React from 'react'
import Counter from './components/Counter'
import AllProducts from './components/AllProducts'
import SpecificProduct from './components/SpecificProduct'
import AddNewProduct from './components/AddNewProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'


function App() {
  return (
    <div>

    <Counter />
    
    <AllProducts />
    
    <SpecificProduct />

    <AddNewProduct />

    <UpdateProduct productId ={6}/>

    <DeleteProduct productId ={8}/>
    </div>
   
  )
}

export default App