"use client";

import Container from "react-bootstrap/Container";
import "./style.css";

export default function Loading() {
  return (
    <>
      <div className="home-background">
        <Container>
          <h1>Loading...</h1>
        </Container>
      </div>
    </>
  );
}
