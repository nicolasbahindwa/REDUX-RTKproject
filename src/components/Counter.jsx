import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount} from "../app/features/counter/counterSlice"; 
import { fetchInitialCount } from "../app/features/counter/counterSlice";


import React, { useEffect } from 'react'

function Counter() {

  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === 'idle'){
        dispatch(fetchInitialCount()) // Initialize the counter with a default value of 0
    }
  })

  if(status === 'loading'){
    return <p>Loading...</p>
  }

  if(status === 'failed'){
    return <p>Error: {error}</p>
  }
  return (
    
    <div>

        
        <h2>counter {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  )
}

export default Counter