import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'

const SpecificProduct =  () => {

  const { data, isError, isLoading } = useGetProductByIdQuery(1)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: failed ...{isError.message}</div>
  return (
    <div>
        <h1>SpecificProduct</h1>
        <h2 key={data.id}>{data.brand}</h2>
        <img src={data.image} alt={data.title} />
        <h3 key={data.id}>{data.title}</h3>
        <p>{data.description}</p>
    </div>
    
  )
}

export default SpecificProduct