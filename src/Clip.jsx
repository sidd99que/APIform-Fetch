import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Import the custom CSS
import { Link } from 'react-router-dom';

const Clip = () => {
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get('https://660972e20f324a9a28834caf.mockapi.io/crud')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setLastName(response.data[response.data.length - 1].name); // Assuming the API response has a 'name' field
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const handleDownload = () => {
    console.log('Last name from API:', lastName);

    // Download resume logic (if needed)
    const link = document.createElement('a');
    link.href = 'path/to/your/resume.pdf'; // Replace with your resume file path
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div className="app-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="mb-4 custom-card" style={{ border: '2px solid #17a2b8'}}>
              <Card.Body>
                <Card.Title> Hi ! {lastName}</Card.Title>
                <Card.Text style={{color:"red"}}>
                Please download your clip after some time. Thank you!
                </Card.Text>
                <Button disabled className="custom-button" onClick={handleDownload}>
                  Download Clip
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 custom-card" style={{ border: '2px solid #17a2b8'}}>
              <Card.Body >
                <Card.Title>Hi ! {lastName}</Card.Title>
                <Card.Text style={{color:"red"}}>
                Please review your application for the job position. Thank you!
                </Card.Text>
                <Link to="/FinalClip">

                <Button className=" btn btn-primary">
                  Review Clip
                </Button>
                </Link>
           
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Clip;
