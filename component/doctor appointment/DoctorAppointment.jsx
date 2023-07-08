import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const DoctorAppointment = () => {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const [appointmentData, setAppointmentData] = useState({
    patientName: '',
    patientId: auth?._id ?? '',
    patientAge: null,
    patientGender: '',
    patientPhone: '',
    doctorId: router.query.id ?? '', // Set doctor ID as a string using router.query.id?.toString()
    slot: '',
    reason: '',
  });

  console.log(auth?._id.toString())
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    createAppointment(appointmentData);
  };
  
  // Function to handle appointment creation
  const createAppointment = async (appointmentData) => {
    try {
      // Make an API request to create an appointment using Axios
      const response = await axios.post('http://localhost:4023/api/v1/appointment/create', appointmentData);
      const appointment = response.data;
      toast.success('Appointment created successfully');
      router.push('/doctor-list');

      
    } catch (error) {
      console.error('Error creating appointment:', error);
      // Handle any network or other errors
    }
  };
  
  useEffect(() => {
    // Call the createAppointment function when the component mounts
    createAppointment(appointmentData);
  }, [router.query.id]);
  

  const inputStyle = {
    marginBottom: '1rem',
  };
  return (
    <div style={{ marginTop: '4rem' }}>
      <Container>
        <h1>Doctor Appointment</h1>
        <Form onSubmit={handleSubmit}>
          <div className='d-flex gap-4'>
            <Form.Group controlId="formName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control style={inputStyle} name='patientName' type="text" placeholder="Enter your name" value={appointmentData.patientName}
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Patient Age</Form.Label>
              <Form.Control style={inputStyle} name='patientAge' type="number" placeholder="Enter your age" value={appointmentData.patientAge}
                onChange={handleInputChange} />
            </Form.Group>
          </div>
          <div className='d-flex gap-4'>
            <Form.Group controlId="formBasicName">
              <label htmlFor="gender" className="ms-4" >Gender</label>
              <select name="patientGender" className="form-control ms-2" required
                value={appointmentData.patientGender}
                onChange={handleInputChange} style={{ width: '100px' }}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Phone</Form.Label>
              <Form.Control style={inputStyle} name='patientPhone' type="number" value={appointmentData.patientPhone}
                onChange={handleInputChange} />
            </Form.Group>
          </div>
          <div className='d-flex gap-4'>
            <Form.Group controlId="formName">
              <Form.Label>Slot</Form.Label>
              <Form.Control style={inputStyle} name='slot' type="datetime-local" placeholder=" time" value={appointmentData.slot}
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows={4} cols={50} name='reason' style={inputStyle} type="number" placeholder="Reason" value={appointmentData.reason}
                onChange={handleInputChange} />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default DoctorAppointment