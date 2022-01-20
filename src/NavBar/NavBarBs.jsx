import React from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBarBs(){
    return(
        <Navbar bg=" " expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="ItemNavBar" to={`/`}>Inicio</Link>
                        <Link className="ItemNavBar" to={`/categoria/skates`}>Skates</Link>
                        <Link className="ItemNavBar" to={`/categoria/longboard`}>Longboards</Link>
                        <Link className="ItemNavBar" to={`/categoria/surfSkate`}>Surf Skates</Link>
                        <Link className="ItemNavBar" to={`/categoria/cruiser`}>Cruisers</Link>
                        <Link className="ItemNavBar" to={`/categoria/cart`}>{<CartWidget></CartWidget>}</Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBarBs
