import React from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import CartWidget from "./CartWidget";

function NavBarBs(){
    return(
        <Navbar bg=" " expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="ItemNavBar" href=" ">Inicio</Nav.Link>
                        <Nav.Link className="ItemNavBar"  href=" ">Skates</Nav.Link>
                        <Nav.Link className="ItemNavBar" href=" ">Longboards</Nav.Link>
                        <Nav.Link className="ItemNavBar" href=" ">Surf Skates</Nav.Link>
                        <Nav.Link className="ItemNavBar" href=" ">Cruisers</Nav.Link>
                        <Nav.Link className="ItemNavBar" href=" ">{<CartWidget></CartWidget>}</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBarBs
{/* <ul className ="NavBar">
            <li><a href="">Skates</a></li>
            <li><a href="">Longboards</a></li>
            <li><a href="">Surf Skates</a></li>
            <li><a href="">Cruisers</a></li>
            <li><a href="">Proteccion</a></li>
            <li><a href="">Contacto</a></li>
        </ul> */}