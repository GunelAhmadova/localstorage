import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>


<>
    
      <Navbar bg="primary"variant="dark">
        <Container>
          <Navbar.Brand>
          <Link  className='link'to='/'>SunEl</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link  className='link'to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='link'to='/products'>Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='link'to='/add'>Add products</Link> 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

   
    </>


    </div>
  )
}

export default Header