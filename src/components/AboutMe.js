import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/myself.jpeg';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img src={image} alt="Your Picture" className={styles.customImage} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
            became a certified personal trainer in 2018 and have since been working at various gyms, gaining extensive experience in the field.
             My primary focus has been on strength training, with a particular emphasis on the foundational lifts such as deadlifts, squats,
              and bench presses. Over the years, I have honed my skills and knowledge in these areas, helping clients achieve their fitness goals and improve their overall strength and performance.
            My journey in the fitness industry has been both rewarding and challenging.
             I am passionate about guiding individuals through their fitness journeys, offering personalized training programs, and providing support and motivation every step of the way.
              Whether you’re looking to enhance your strength, improve your technique, or reach new fitness milestones, I’m here to help you every step of the way.
            Feel free to adjust any part of the text to better suit your personal experience or style!
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;