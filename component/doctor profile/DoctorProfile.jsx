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
  const { doctorId } = router.query;
  const [doctor, setDoctor] = useState({});
  console.log(doctorId);

  useEffect(() => {
    if (doctorId) {
      // Fetch the doctor's details based on the doctorId
      axios.get(`http://localhost:4023/api/v1/doctor/view-profile/${doctorId}`)
        .then(response => {
          setDoctor(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching doctor details:', error);
        });
    }
  }, [doctorId]);


  return (
    <div style={{ marginTop: '4rem' }}>
      <Container>
        <Row className='pt-5'>
          <Col xl={4} md={6}  >
            <Image src="/image/doctor1.jpg" alt="Picture of the author" width={400} height={300} />
            {/* <div className='d-flex gap-3'>
              <Link href={`/doctor-appointment/${doctor._id}`}>
                <Button variant="success">Get Appointment </Button>
              </Link>
            </div> */}
            {auth?.role === 'doctor' && <div className='d-flex justify-content-center'>
              <Link href="/edit-profile">
                <Button variant="success" className='mt-4'>Edit Profile</Button>
              </Link>
            </div>

            }

          </Col>
          <Col xl={8} md={6}  >
            <h3> Dr. Shahidul Islam</h3>
            <p><b>Phone -</b> 015151511 </p>
            <p><b>Department-</b> Neorology</p>
            <p> <b>Education-</b> fw wf wfe </p>
            <p> <b>Experience-</b> 10years </p>
            <p> <b>Address-</b> efw ew ec wec  </p>
            <p> <b>Short Description-</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi tempore voluptate vitae error distinctio dolorem itaque quod cumque placeat! </p>

          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default DoctorProfile