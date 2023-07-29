import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
  const isSeller = user?.isseller || false;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>A-Maze-On</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isSeller ? (
              <>
                <Link passHref href="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </Link>
                <Link passHref href="/order/orders">
                  <Nav.Link>Orders Page</Nav.Link>
                </Link>
              </>
            ) : (
              <>
                <Link passHref href="/">
                  <Nav.Link>Products</Nav.Link>
                </Link>
                <Link passHref href="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </Link>
                <Link passHref href="/order/orders">
                  <Nav.Link>Orders Page</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
