import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import Link from 'next/link';
import axios from 'axios';

const DoctorProfile = () => {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const { id } = router?.query;
  const [doctor, setDoctor] = useState({});
  console.log(id);

  useEffect(() => {
    if (id) {
      // Fetch the doctor's details based on the doctorId
      axios.get(`http://localhost:4023/api/v1/doctor/view-profile/${id}`)
        .then(response => {
          setDoctor(response.data?.data);
          console.log(response.data?.data);
        })
        .catch(error => {
          console.error('Error fetching doctor details:', error);
        });
    }
  }, [id]);


  return (
    <div style={{ marginTop: '4rem' }}>
      <Container>
        <Row className='pt-5'>
          <Col xl={4} md={6}  >
            {doctor?.profileImage ? (
              <img src={doctor.profileImage} width={400} height={300} />
            ) : (
              <img src="/image/no-photo.png" width={400} height={300} />
            )}


            <h3> {doctor?.name}</h3>
            <p><b>Phone -</b> {doctor?.phone} </p>
            <p><b>Email -</b> {doctor?.email} </p>



            {/* <div className='d-flex gap-3'>
              <Link href={`/doctor-appointment/${doctor._id}`}>
                <Button variant="success">Get Appointment </Button>
              </Link>
            </div> */}
            {auth?.role === 'doctor' && <div className='d-flex justify-content-center'>
              <Link href={`/edit-profile?id=${doctor?._id}`} as={`/edit-profile?id=${doctor?._id}`}>
                <Button variant="success" className="mt-4">Edit Profile</Button>
              </Link>

            </div>

            }

          </Col>
          <Col xl={8} md={6}  >
            <p><b>Gender -</b> {doctor?.gender} </p>
            <p><b>Age -</b> {doctor?.age} </p>
            <p><b>Department -</b> {doctor?.department}</p>
            <p> <b>Education -</b> {doctor?.education}</p>
            <p> <b>Address -</b> {doctor?.address} </p>
            <p> <b>City -</b> {doctor?.city} </p>
            <p> <b>Speciality -</b>{doctor?.specialty} </p>
            <p> <b>Short Description -</b> {doctor?.shortDescription} </p>

          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default DoctorProfile