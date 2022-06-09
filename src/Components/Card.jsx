import React from 'react'
import bookimg from '../Images/test book image.jpg'
function Card({book}) {
  console.log(book);
  return (

   <>
   {book.map(item=>{
    //  let thumbnail = item.volumeInfo.imagelinks&& item.volumeInfo.imagelinks.smallThumbnail;
    let image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
     let title = item.volumeInfo.title;
    //  let author = item.volumeInfo && item.volumeInfo.authors[0];
     let more = item.volumeInfo.infoLink;
     if(image!=undefined && title != undefined )
     {
       try{
        return(<div className='card'>
        <img src={image} alt="" className='card_img'/>
        <div className='card_bottom'>
            <h3 className="title">{title}</h3>
            {/* <p className="author">{author}</p> */}
            <a href={more}  target="_blank"><button className="more">Show More</button></a>
        </div>
    </div>)
       }

       catch{
         return(<h1>Something Went Wrong</h1>)
         
       }
     }
     
   })}
    
    </>
  )

}

export default Card