import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

export const PageNotFound = () => {
  return (
    <div className='text-center mt-5'>
        <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" alt="" /> <br />
        <Link to="/" className='btn btn-primary'>Back To Home</Link>
    </div>
  )
}
