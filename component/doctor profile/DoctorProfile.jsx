import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

const DoctorProfile = () => {
  const [profile, setProfile] = useState({});
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  console.log(auth?.role);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: 'http://localhost:4023/api/v1/doctor/update-profile',
          headers: {
            Authorization: auth?.token,
          },
        };

        const response = await axios(config);
        setProfile(response?.data);
        console.log(response?.data)
      } catch (error) {
        // toast.error("Something went wrong");
      }
    };

    fetchInvoiceData();
  }, [router.query.id]);
  return (
    <div style={{ marginTop: '4rem' }}>
      <Container>
        <Row className='pt-5'>
          <Col xl={4} md={6}  >
            <Image src="/image/doctor1.jpg" alt="Picture of the author" width={400} height={300} />
            {auth?.role === 'doctor' && <div className='d-flex justify-content-center'>
              <Button variant="success" className='mt-4'>Edit Profile</Button>
            </div>}

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
    </div>
  )
}

export default DoctorProfile