import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import { Card, Col, Row } from 'react-bootstrap';


const Home = () => {
    // Updated sample data for success stories
    const stories = [
      {
        name: 'Luna',
        image: require('../images/success1.jpeg'),
        story: 'Luna was adopted by a loving family and now enjoys playing in the backyard and snuggling on the couch.'
      },
      {
        name: 'Charlie',
        image: require('../images/success2.jpeg'),
        story: 'Charlie found a forever home where he gets to go on daily walks and has a new best friend to play with.'
      },
      {
        name: 'Bella',
        image: require('../images/success3.jpeg'),
        story: 'Bella was adopted by a couple who had always wanted a dog. She now has a comfortable bed and plenty of toys.'
      }
    ];

    return (
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
    <div className="hero-content">
        <h1>Welcome to Pet Heaven</h1>
        <p>Giving abandoned pets a second chance at happiness.</p>
        </div>
        <Link to="/pets" className="hero-button">Adopt a Pet</Link>

</section>
        {/* About Section */}
        <section className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>Pet Heaven is dedicated to the welfare of abandoned pets, helping them find loving homes.</p>
            <Link to="/about" className="learn-more">Learn More</Link>
          </div>
        </section>

        {/* Meet My Pets Section */}
        <section className="meet-my-pets">
          <h2>Meet Our Dogs</h2>
          <p>Here are some of the lovely dogs waiting for their forever home!</p>

          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/dogs1.jpeg')}
                alt="Buddy"
              />
              <Carousel.Caption>
                <h3>Buddy</h3>
                <p>Friendly and playful Golden Retriever.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/dogs2.jpeg')}
                alt="Bella"
              />
              <Carousel.Caption>
                <h3>Bella</h3>
                <p>Sweet and affectionate Beagle.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/dogs3.jpeg')}
                alt="Max"
              />
              <Carousel.Caption>
                <h3>Max</h3>
                <p>Loyal and energetic Pit Bull.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/dogs4.jpeg')}
                alt="Rex"
              />
              <Carousel.Caption>
                <h3>Rex</h3>
                <p>Gentle and playful Labrador.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* How to Help Section */}
        <section className="help">
          <h2>How You Can Help</h2>
          <div className="help-options">
            <Link to="/donate" className="help-option">Donate</Link>
            <Link to="/volunteer" className="help-option">Volunteer</Link>
            <Link to="/adopt" className="help-option">Adopt</Link>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="success-stories">
          <h2>Success Stories</h2>
          <Row>
            {stories.map((story, index) => (
              <Col md={4} key={index} className="story-col">
                <Card className="story-card">
                  <Card.Img variant="top" src={story.image} alt={story.name} />
                  <Card.Body>
                    <Card.Title>{story.name}</Card.Title>
                    <Card.Text>{story.story}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

    </div>
  );
}

export default Home;
