import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap'

const DoctorList = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

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

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
    // Do something with the selected department (e.g., send it to the server, update state, etc.)
    console.log('Selected department:', department);
  };


  return (
    <div style={{ marginTop: '4rem' }}>
      <div className='d-flex justify-content-center gap-3' style={{ padding: '30px' }}>
        <Dropdown>
          <div className='d-flex justify-content-center gap-3' >
            <h4>Select Department: </h4>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedDepartment || 'Select Department'}
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
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor1.jpg" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor2.jpg" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor3.avif" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor4.avif" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor5.avif" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor6.avif" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor7.jpg" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} sm={12} className='mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/image/doctor8.jpg" />
              <Card.Body>
                <Card.Title>Lorem Lorem</Card.Title>
                <Card.Text>
                  <b>Speciality -</b> Consultant,ENt, Head and Neck Surgery <br />
                  <b>Degree-</b> MBBS, FCPS(ENT)
                </Card.Text>
                <div className='d-flex gap-3'>
                  <Link href='/doctor-appointment' >
                    <Button variant="success">Get Appointment</Button>
                  </Link>
                  <Link href='/doctor-profile' >
                    <Button variant="success">Profile</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>

  )
}

export default DoctorList