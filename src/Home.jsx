import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#e0e0e0' }}>
      <h2 className="mb-4 text-center" style={{ color: '#333' }}>𝚃𝚎𝚕𝚕 𝚞𝚜 𝚊𝚋𝚘𝚞𝚝 𝚢𝚘𝚞𝚛𝚜𝚎𝚕𝚏</h2>
      <div className="row justify-content-center align-items-center g-4 w-100">
        
        {/* Teacher Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '0px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img
              src="https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-957.jpg"
              className="rounded-circle mx-auto"
              alt="Avatar"
              style={{ width: '150px', border: '2px solid #17a2b8' }}
            />
            <h2 className="mt-3" style={{ color: '#333' }}>Teacher</h2>
            <button
              className="btn mt-2"
              style={{
                backgroundColor: '#17a2b8',
                color: '#fff',
                borderColor: '#17a2b8',
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '25px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#138496')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#17a2b8')}
            >
              I am a teacher
            </button>
          </div>
        </div>

        {/* Student Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '0px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img
              src="https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-789.jpg"
              className="rounded-circle mx-auto"
              alt="Avatar"
              style={{ width: '150px', border: '2px solid #28a745' }}
            />
            <h2 className="mt-3" style={{ color: '#333' }}>𝙹𝚘𝚋 𝚂𝚎𝚎𝚔𝚎𝚛</h2>

            <Link to='/Form'>
              <button
                className="btn mt-2"
                style={{
                  backgroundColor: '#28a745',
                  color: '#fff',
                  borderColor: '#28a745',
                  padding: '10px 20px',
                  fontSize: '16px',
                  borderRadius: '25px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#218838')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#28a745')}
              >
                I am a student
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
