import React, { useState } from 'react';
import axios from 'axios'; // don't forget to import axios
import { useNavigate } from 'react-router-dom';

function Form() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    address: '',
    message: '',
    category: '',
    remote: 'yes', // default value for radio button
    Resume:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://660972e20f324a9a28834caf.mockapi.io/crud', formData);
      // reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        experience: '',
        address: '',
        message: '',
        category: '',
        remote: 'yes', // reset radio button to default value
        Resume:''
      });
      
      alert('Form submitted successfully!');

      setTimeout(() => {
        navigate('/Clip');
      }, 300);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }

 
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 rounded-3 shadow">
            <div className="card-body p-5 position-relative" style={{ backgroundColor: '#f9f9f9' }}>
              <div className="bg-overlay"></div> {/* Background overlay */}
              <h2 className="text-center text-dark mb-4">Apply Now</h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                  <input
                    required
                    name="name"
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <select
                    required
                    name="experience"
                    className="form-select rounded-pill"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option disabled value="">Experience</option>
                    <option>1 - 2 years</option>
                    <option>2 - 4 years</option>
                    <option>4 - 7 years</option>
                    <option>7 - 10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="address"
                    className="form-control rounded-pill"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control rounded-3"
                    rows="3"
                    placeholder="Tell us more about yourself"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <select
                    required
                    name="category"
                    className="form-select rounded-pill"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option disabled value="">Category</option>
                    <option>Full Stack dev</option>
                    <option>Front-End dev</option>
                    <option>Mern Stack dev</option>
                    <option>Backend dev</option>
                    <option>.Net dev</option>
                  </select>
                </div>
                <div className="mb-3">
                  <p>Upload Your CV</p>
                  <input
                    required
                    name="Resume"
                    type="file"
                    className="form-control rounded-pill"
                    value={formData.Resume}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="remote"
                      value="yes"
                      checked={formData.remote === 'yes'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-dark">You'd like to work remotely</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="remote"
                      value="no"
                      checked={formData.remote === 'no'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-dark">You'd prefer to work onsite</label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 rounded-pill">Submit</button>
                </div>
              </form>
              <div className="text-center small mt-3 text-dark">
                by <a href="#" className="text-decoration-none">By Tata</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
