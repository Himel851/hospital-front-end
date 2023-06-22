import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { GiCherish } from 'react-icons/gi';
import { FaAccessibleIcon, FaAmbulance, FaUserTie } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdPersonPin } from 'react-icons/md';
import { TbBed } from "react-icons/tb";

const Admin = () => {
  return (
    <Container>
      <Row style={{ marginTop: '4rem' }} className="justify-content-center align-items-center" >
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <GiCherish
                style={{
                  fontSize: '3rem',
                  color: '#22577E',
                  border: '2px solid #22577E',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text className="fw-bold">128</Card.Text>
            <Card.Text>Doctors</Card.Text>
            <Card.Text>3 doctors joined today</Card.Text>
          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FaAccessibleIcon
                style={{
                  fontSize: '3rem',
                  color: '#125B50',
                  border: '2px solid #125B50',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text className="fw-bold">155K</Card.Text>
            <Card.Text>Patients</Card.Text>
            <Card.Text>122 new patients admitted</Card.Text>
          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FiUsers
                style={{
                  fontSize: '3rem',
                  color: '#1572A1',
                  border: '2px solid #1572A1',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text className="fw-bold">452</Card.Text>
            <Card.Text>Staff</Card.Text>
            <Card.Text>12 staff members on vacation</Card.Text>
          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <TbBed 
                style={{
                  fontSize: '3rem',
                  color: '#251fd8',
                  border: '2px solid #454add',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text className="fw-bold">142</Card.Text>
            <Card.Text>Beds</Card.Text>
            <Card.Text>10 beds remaining usable</Card.Text>
          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FaAmbulance 
                style={{
                  fontSize: '3rem',
                  color: '#bc3821',
                  border: '2px solid #ba362d',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text className="fw-bold">120</Card.Text>
            <Card.Text>Ambulance</Card.Text>
            <Card.Text>19 Ambulance in service</Card.Text>
          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <MdPersonPin
                style={{
                  fontSize: '3rem',
                  color: '#7B1EA2',
                  border: '2px solid #7B1EA2',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text className="fw-bold">12</Card.Text>
            <Card.Text>Representatives</Card.Text>
            <Card.Text>6 representatives are active</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default Admin;
