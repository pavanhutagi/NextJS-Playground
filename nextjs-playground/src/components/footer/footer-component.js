"use client";

import Card from "react-bootstrap/Card";

export default function FooterComponent() {
  return (
    <>
      <Card className="text-center" bg="dark" style={{ borderRadius: "0px" }}>
        <Card.Footer className="text-muted">NextJS Playground</Card.Footer>
      </Card>
    </>
  );
}
