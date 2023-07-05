import Image from 'next/image'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useAuth } from '../../context/auth';

const PatientProfile = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth)

  return (
    <div style={{ marginTop: '4rem', padding: '30px' }}>
        <Container>
        <Row>
          <Col xl={6}  sm={12} className='mt-3'>
           <Image src="/image/no-photo.png" alt="Picture of the author" width={500} height={400} />
          </Col>
          <Col xl={6}  sm={12} className='mt-3'>
           <p className='fs-2'> <b>Name:</b>  {auth?.name}</p>
           <p className='fs-2'> <b>Email:</b>  {auth?.email}</p>
           <p className='fs-2'> <b>age:</b>  24</p>
           <p className='fs-2'> <b>Number:</b>  017XXXXXXXX</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PatientProfile