import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    
    .navbar {
        height: 80px;
        font-family: Amatic SC;
        font-size: 2em;

    }

    #logo {
    position: relative;
    background-size: contain;
    }

    .navbar-brand {
        object-fit: cover;
    }

    .nav-item {
        position: relative;
        top: 5%;
        right: 3%;
        padding-left: 10px;
    }


`;

export const NavigationBar = () => (
    <Styles>
               <Navbar className="justify-content-center" >
                    <Nav id="navigation" className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Navbar.Brand href="/">
                            <img id="logo" src="https://i.imgur.com/ZrIkE67.png" 
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Nav.Item>
                        <Nav.Link href="/locations">Locations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
                </Navbar>
    </Styles>

)


/* <Nav>
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Navbar.Brand href="/">Sorta Sunny</Navbar.Brand>
                        <Nav.Item>
                            <Nav.Link href="/locations">Locations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>






                    <Navbar expand="lg">
                
            </Navbar>
*/