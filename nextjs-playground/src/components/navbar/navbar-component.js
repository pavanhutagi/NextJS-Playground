"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="/">NextJS Playground</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/ai-prompts">AI Prompts</Nav.Link>
            <Nav.Link href="/components-play">Components Play</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
