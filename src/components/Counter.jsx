import React from 'react'
import './Counter.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Counter() {
    const select=useSelector((data)=>{
    return data
    })
  const dispatch=useDispatch()
  const inc=()=>{
    dispatch({type:'inc'})
  }
  const dec=()=>{
    dispatch({type:'dec'})
  }
  const reset=()=>{
    dispatch({type:'reset'})
  }

  return (
    <div>

         <h1>counter app</h1>
        <h2 className='value'>{select}</h2>
        <button  onClick={inc}><i class="fa-sharp fa-solid fa-plus fa-bounce"></i> </button>
        <button onClick={dec}><i class="fa-solid fa-minus fa-bounce"></i></button>
        <button onClick={reset}><i class="fa-solid fa-power-off fa-bounce"></i></button>

    </div>
  )
}

export default Counter