import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col md={6} className="welcome-text">
            <h1 className="display-4">Welcome to Our Unique World</h1>
            <p className="lead">Where creativity knows no bounds!</p>
            <Button variant="primary" size="lg" className="mt-3">
              Get Started
            </Button>
          </Col>
          <Col md={6} className="welcome-image">
          <Link to="/">
            <Button variant="primary" size="sm" className="mt-3">
            LogOut</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
