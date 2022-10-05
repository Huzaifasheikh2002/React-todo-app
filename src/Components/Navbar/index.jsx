import React from 'react'

import { Link, NavLink } from 'react-router-dom';




function NavBarComp() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                <Link to ="/">Home</Link> 
            </Nav.Link>
        
            <Nav.Link>
                <Link to="/about">About</Link> 
            </Nav.Link>

            <Nav.Link>
                <Link to ="/login">Login</Link> 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <section className='navbarApp'>
        <div>
          <h3>Todo App List </h3>
        </div>
        <div>
          <ul>
  <li><NavLink className={({isActive})=>{
      return isActive ? "activeLink" : "";
            }}to="/">Home </NavLink> </li>

  <li><NavLink className={({isActive})=>{
      return isActive ? "activeLink" : "";
          }} to ="/about">About</NavLink></li>
            
            {/*  */}
  <li><NavLink className={({isActive})=>{
      return isActive ? "activeLink" : "";
    }} to="/login">Login</NavLink></li>




          </ul>
        </div>
      </section>
    
    </>
  );
}

export default NavBarComp;
