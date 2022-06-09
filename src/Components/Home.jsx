import React from 'react'
import home_img from '../Images/home page image.png'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='home_container'>
        
        <h1 className='home_heading'> WELCOME TO LIBOT.</h1>
        <img src={home_img} alt="" className='home_img'/>
        <h3 className='home_des'>This is a place where you can find, buy or even read the free samples of your favourite books. <br /> Find your books now.</h3>
        <Link  to={"/books"}> <button className='home_books_btn'>Go to Books</button></Link>
    </div>
  )
}

export default Home