import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'
import{Link} from 'react-router-dom'

const Home = () => {
  return (
    <div >
      <h1>Student Data</h1>
      <div>
        <Link to={`/tables`}>
        <Button className='button'>Student Count</Button></Link>

        <Link to={`/sub`}><Button className='button'>Subject Marks</Button></Link>

        <Link to={`/total`}>
            <Button className='button'>Student Marks</Button></Link>
            </div>
    </div>
  )
}

export default Home