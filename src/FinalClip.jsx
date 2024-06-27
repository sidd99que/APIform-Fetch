import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Import the custom CSS
import { Link } from 'react-router-dom';

const FinalClip = () => {
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get('https://660972e20f324a9a28834caf.mockapi.io/crud')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCandidate(response.data[response.data.length - 1]); // Assuming the API response has the required fields
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const handleDownload = () => {
    console.log('Candidate data from API:', candidate);

    // Download resume logic
    if (candidate.Resume) {
      const link = document.createElement('a');
      link.href = candidate.Resume; // Use the resume file path from the candidate data
      link.download = candidate.Resume.split('\\').pop(); // Extract the file name from the path
      document.body.appendChild(link); // Append link to the body
      link.click();
      document.body.removeChild(link); // Remove the link after download
    } else {
      console.error('Resume not found');
    }
  };

  const handleDelete = () => {
    // Delete candidate logic
    axios.delete(`https://660972e20f324a9a28834caf.mockapi.io/crud/${candidate.id}`)
      .then((response) => {
        console.log('Candidate deleted:', response.data);
        setCandidate({}); // Clear candidate data after deletion
      })
      .catch((error) => {
        console.error('Error deleting candidate:', error);
      });
  };

  return (
    <div className="app-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <table className="custom-table">
              <tbody>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{candidate.name}</td>
                </tr>
                <tr>
                  <td><strong style={{color:'red'}}>Email:</strong></td>
                  <td>{candidate.email}</td>
                </tr>
                <tr>
                  <td><strong style={{color:'red'}}>Experience:</strong></td>
                  <td>{candidate.experience}</td>
                </tr>
                <tr>
                  <td><strong style={{color:'red'}}>Address:</strong></td>
                  <td>{candidate.address}</td>
                </tr>
                <tr>
                  <td><strong style={{color:'red'}}>Message:</strong></td>
                  <td>{candidate.message}</td>
                </tr>
                <tr>
                  <td><strong style={{color:'red'}}>Category:</strong></td>
                  <td>{candidate.category}</td>
                </tr>
                <tr>
                  <td><strong style={{color:'red'}}>Remote:</strong></td>
                  <td>{candidate.remote}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="button-row">
                    <Button className="edit-button" onClick={handleDownload}>
                      Edit
                    </Button>
                    <Link to="/Form"> 
                    <Button className="delete-button" onClick={handleDelete}>
                      Delete
                    </Button>
                    </Link>
              
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FinalClip;
