import React from 'react';
import { useState } from 'react';
import Card from './Card';
import { AiOutlineFileSearch } from 'react-icons/ai';
import books_img from "../Images/people reading books.jpg";
import axios from 'axios';
function Books() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook =(evt)=>
  {
        if(evt.key === "Enter")
        {
          axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCEdmTluBzjCobpscatr9c2wzLfgq0ZH_o&maxResults=20`)
          .then(res=> setBookData(res.data.items))
          .catch(err=> console.log(err))
        }
  }

  function searchBooks()
  {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCEdmTluBzjCobpscatr9c2wzLfgq0ZH_o&maxResults=10`)
          .then(res=> setBookData(res.data.items))
          .catch(err=> console.log(err))
  }
  return (
    <div className='books_container'>
        
    <h1 className='quote'>A room without books is like a<br /> body without a soul.</h1>
    <img src={books_img} className="book_img" />
    <div className='search_form'>
    <h2 className='find_heading'>Find your books here</h2>
    <input 
    type="search" 
    className='search_item search_input' 
    placeholder='seach books'
    value={search}
    onChange={e=>setSearch(e.target.value)}
    onKeyDown={searchBook}
    />
    <button className='search_item search_btn' onClick={searchBooks}>Search <AiOutlineFileSearch/></button>
    </div>
    
    <div className="card_cantainer">
    {
     
<Card book={bookData}/>      
}
    </div>
    </div>

  )
}

export default Books

// api key: AIzaSyCEdmTluBzjCobpscatr9c2wzLfgq0ZH_o