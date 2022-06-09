import React from 'react'
import myImg from '../Images/p11.jpg'
import abhiImg from '../Images/p12.png'
import { AiFillStar } from 'react-icons/ai';
function About() {
  return (
    // <div className='about_container'>
    //    <h1 className='about_heading'>WHO ARE WE</h1>
    //    <p className='about_des'>The development team of this project consists of 2 members RAHUL KUMAR HOTTA and ABHIJEET PADHI. We are the students of NIST, Brahmapur, odisha. Computer Science is our feild of interest. We have developed LiBot as Lab based project of 6th semester of computer science branch. </p>

    <div>
      <div className="testimonials">
        <div className="inner">
          <h1>TESTIMONIALS</h1>
          <div className="border"></div>

          <div className="row ">
            <div className="col">
              <div className="testimonial">
                <img src={myImg} alt="" />
                <div className="name">Rahul Kumar Hotta</div>
                <div className="stars">
                  {/* <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i> */}
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                </div>

                <p>
                  Name: Rahul Kumar Hotta
                  <br />
                  Roll No: 201940399  <br />
                  reg no: 1901202178   <br />
                  branch: CSE  <br />
                  email: rahulhotta99@gmail.com  <br />
                  
                  </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={abhiImg} alt="" />
                <div className="name">Abhijeet Padhi</div>
                <div className="stars">
                  {/* <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i> */}
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                  <AiFillStar className='fas' />
                </div>

                <p>
                  Name: Abhijeet Padhi  <br />
                  Roll No: 201910529 <br />
                  reg no: 1901202016 <br />
                  branch: CSE <br />
                  email: abhipadhi001@gmail.com  <br />
                </p>
              </div>
            </div>
            <div className="about_footer"> contact us <br />
            <a href="mailto:rahulhotta99@gmail.com?body=My custom mail body" className='email_link'>rahulhotta99@gmail.com</a>
            <a href="mailto: abhipadhi001@gmail.com?body=My custom mail body" className='email_link'> abhipadhi001@gmail.com</a>
            </div>
            {/* abhipadhi001@gmail.com */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About