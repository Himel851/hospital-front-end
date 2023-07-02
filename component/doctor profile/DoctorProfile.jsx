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
            toast.error("Something went wrong");
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
                        <div className='d-flex justify-content-center'>
                            <Button variant="success" className='mt-4'>Get Appointment</Button>
                        </div>

                    </Col>
                    <Col xl={8} md={6}  >
                        <h3>Dr. Shahidul Islam</h3>
                        <p><b>Speciality -</b> Consultant,ENt, Head and Neck Surgery</p>
                        <p><b>Degree-</b> MBBS, FCPS(ENT)</p>
                        <p>Dr. Shahidul Islam is a highly skilled and compassionate physician specializing in family medicine. With a warm and caring demeanor, she strives to provide personalized healthcare to patients of all ages. Dr. Rodriguez completed her medical degree at a renowned medical school and subsequently pursued a residency in family medicine, where she honed her clinical expertise.</p>
                        <p>With over 15 years of experience in the field, Dr. Rodriguez has developed a deep understanding of the unique healthcare needs of individuals and families. She is passionate about preventive medicine and places great emphasis on educating her patients about healthy lifestyle choices, disease prevention, and wellness strategies. Dr. Rodriguez believes in building strong doctor-patient relationships based on trust, open communication, and mutual respect.</p>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DoctorProfile