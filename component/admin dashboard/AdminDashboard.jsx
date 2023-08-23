import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { GiCherish } from 'react-icons/gi';
import { FaAccessibleIcon, FaAmbulance, FaUserTie } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdPersonPin } from 'react-icons/md';
import { TbBed } from "react-icons/tb";
import axios from 'axios';

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchDoctorList();
  }, []);

  const fetchDoctorList = async () => {
    try {
      const response = await axios.get('http://localhost:4023/api/v1/admin/dashboard');
      const { data } = response.data;
      setData(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching doctor list:', error);
    }
  };

  return (
    <Container>
      <Row style={{ marginTop: '4rem' }} className="justify-content-center align-items-center" >
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FiUsers
                style={{
                  fontSize: '3rem',
                  color: '#22577E',
                  border: '2px solid #22577E',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text>Total Patient {data?.patientNo}</Card.Text>
          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FiUsers
                style={{
                  fontSize: '3rem',
                  color: '#125B50',
                  border: '2px solid #125B50',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text>Total Doctor {data?.doctorNo}</Card.Text>


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
            <Card.Text className='mt-2'>Total Departments {data?.totalDepartments}</Card.Text>

          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FiUsers 
                style={{
                  fontSize: '3rem',
                  color: '#251fd8',
                  border: '2px solid #454add',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text>Total Approved Doctor {data?.approvedDoctorNo}</Card.Text>

          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FiUsers 
                style={{
                  fontSize: '3rem',
                  color: '#bc3821',
                  border: '2px solid #ba362d',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text>Total Rejected Doctor {data?.rejectedDoctorNo}</Card.Text>

          </Card>
        </Col>
        <Col className="my-2" xl={4} sm={12}>
          <Card className="p-3 text-center">
            <div>
              <FiUsers
                style={{
                  fontSize: '3rem',
                  color: '#7B1EA2',
                  border: '2px solid #7B1EA2',
                  borderRadius: '20%',
                  padding: '5px',
                }}
              />
            </div>
            <Card.Text>Total Pending Doctor {data?.pendingDoctorNo}</Card.Text>

          </Card>
        </Col>
      </Row>
    </Container>


  );
};

export default Admin;
