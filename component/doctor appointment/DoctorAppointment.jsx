import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const DoctorAppointment = () => {
    const [appointmentData, setAppointmentData] = useState({
        patientName: '',
        patientId: '',
        patientAge: null,
        patientGender: '',
        patientPhone: '',
        doctorId: '',
        slot: '',
        reason: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAppointmentData({ ...appointmentData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createAppointment(appointmentData);
        // Handle form submission logic here
    };

    // Function to handle appointment creation
    const createAppointment = async (appointmentData) => {
        try {
            // Make an API request to create an appointment using Axios
            const response = await axios.post('http://localhost:4023/api/v1/appointment/create', appointmentData);

            if (response.status === 200) {
                const appointment = response.data;
                console.log('Appointment created:', appointment);
                // Do something with the created appointment data, e.g., show a success message
            } else {
                console.log('Appointment creation failed');
                // Handle the error case, e.g., show an error message
            }
        } catch (error) {
            console.error('Error creating appointment:', error);
            // Handle any network or other errors
        }
    };

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
                            <Form.Control style={inputStyle} name='slot' type="text" placeholder=" time" value={appointmentData.slot}
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