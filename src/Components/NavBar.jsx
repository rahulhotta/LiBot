import React from 'react'
import {NavLink} from "react-router-dom"
import {useState} from 'react'
import { Button,Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import { HiHome } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';
import { IoMdPerson } from 'react-icons/io';
import logo from '../Images/Group 1.png'
// import background_img from '../Images/background.jpg'
function NavBar({handleLogOut}) {
const [page,setPage] = useState("home");
  return (
    <div className='nav_bar' >
      
{/* <img src={background_img} alt="" /> */}
  <Navbar collapseOnSelect expand="lg"  variant="light" >
  <Container>
  
  <h1 className='logo_txt'><img src={logo}className="logo_img"/>Libot</h1>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavLink exact activeClassName="active" className="nav_item home_btn"to={"home"}><HiHome/>Home</NavLink>
    <NavLink exact activeClassName="active" className="nav_item books_btn"to={"books"}><ImBooks/>Books</NavLink>
    <NavLink exact activeClassName="active" className="nav_item about_btn"to={"about"}><IoMdPerson/>about</NavLink>
    {/* <NavLink exact activeClassName="active" className="nav_item "to={"/"}><IoMdPerson/>LogIn</NavLink> */}
    <button onClick={handleLogOut}>logOut</button>

    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default NavBar