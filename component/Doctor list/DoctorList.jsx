import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap'

const DoctorList = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('Cardiology');
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();


  useEffect(() => {
    // Fetch the department data from your API endpoint
    axios.get('http://localhost:4023/api/v1/department/view')
      .then(response => {
        setDepartments(response.data.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      // Fetch the doctors based on the selected department
      axios.get(`http://localhost:4023/api/v1/doctor/view/doctor/${selectedDepartment}`)
        .then(response => {
          setDoctors(response.data.data);
          console.log(response.data.data)
        })
        .catch(error => {
          console.error('Error fetching doctors:', error);
        });
    }
  }, [selectedDepartment]);

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
    // Do something with the selected department (e.g., send it to the server, update state, etc.)
    console.log('Selected department:', department);
  };

  const handleProfileClick = (doctorId) => {
    router.push(`/doctor-profile/${doctorId}`);
  };


  return (
    <div style={{ marginTop: '4rem' }}>
      <div className='d-flex justify-content-center gap-3' style={{ padding: '30px' }}>
        <Dropdown>
          <div className='d-flex justify-content-center gap-3' >
            <h4>Select Department: </h4>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedDepartment}
            </Dropdown.Toggle>
          </div>
          <Dropdown.Menu >
            {departments.map(department => (
              <Dropdown.Item
                key={department._id}
                onClick={() => handleDepartmentSelection(department.departmentName)} >{department.departmentName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Container>
        <Row>
          {doctors.length > 0 ? <> {doctors.map(doctor => (
            <Col xl={3} md={6} sm={12} className='mt-3' key={doctor._id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/image/doctor1.jpg" />
                <Card.Body>
                  <Card.Title>{doctor.name}</Card.Title>
                  <Card.Text>
                    <b>Speciality -</b> {doctor.speciality} <br />
                    <b>Degree-</b> {doctor.degree}
                  </Card.Text>
                  <div className='d-flex gap-3'>
                    <Link href={`/doctor-appointment/${doctor._id}`}>
                      <Button variant="success">Get Appointment </Button>
                    </Link>
                    {/* <Link href={`/doctor-profile/${doctor._id}`}>
                      <Button variant="success">Profile</Button>
                    </Link> */}
                    <div className='d-flex gap-3'>
                      <Button variant="success" onClick={() => handleProfileClick(doctor._id)}>Profile</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}</> :
            <>
              <h1 className='text-center'>No Doctors Found</h1>
            </>}
        </Row>

      </Container>
    </div>

  )
}

export default DoctorList