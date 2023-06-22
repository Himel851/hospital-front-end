import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const DoctorAppointment = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    const inputStyle = {
        marginBottom: '1rem',
      };


    return (
        <div style={{ marginTop: '4rem' }}>
            <Container>
                <h1>Doctor Appointment</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={inputStyle} type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control style={inputStyle} type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control style={inputStyle} type="date" />
                    </Form.Group>

                    <Form.Group controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control style={inputStyle} type="time" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
        

    );
};


export default DoctorAppointment