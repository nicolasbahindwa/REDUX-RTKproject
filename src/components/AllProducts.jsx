import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetAllProductQuery } from '../app/service/dummyData'

const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductQuery()
    
    if (isError){
        return <p>Error fetching products: {isError.message}</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    

  return (
    <div>
        <h2>All products</h2>
        {data?.products.map((p) => (
            <div key={p.id}>
                <img src={p.image} alt={p.title} />
                <h3 key={p.id}>{p.title}</h3>
                <p>{p.description}</p>
            </div>
                
        ))
        
        }
    </div>
  )
}

export default AllProducts