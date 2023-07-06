import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { Table } from 'react-bootstrap';

const MyAppointment = () => {
    const [auth, setAuth] = useAuth();
    const [list, setList] = useState([]);
    const router = useRouter();

    console.log(auth?._id)

    useEffect(() => {
        const fetchInvoiceData = async () => {
            try {

                const response = await axios.get(`http://localhost:4023/api/v1/appointment/view/patient/${auth?._id}`);
                setList(response?.data?.data?.data);
                console.log(response?.data)
            } catch (error) {
                // toast.error("Something went wrong");
            }
        };

        fetchInvoiceData();
    }, []);
    return (
        <div style={{ marginTop: '4rem', padding: '30px' }}>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <strong>Patient Name</strong>
                        </th>
                        <th>
                            <strong>Gender</strong>
                        </th>
                        <th>
                            <strong>Age</strong>
                        </th>
                        <th>
                            <strong>Slot</strong>
                        </th>
                        <th>
                            <strong>Reason</strong>
                        </th>
                        <th>
                            <strong>Actions</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.map((item) => (
                            <tr key={item?._id}>
                                <td>{item?.patientName}</td>
                                <td>{item?.patientGender}</td>
                                <td>{item?.patientAge}</td>
                                <td>{item?.slot}</td>
                                <td>{item?.reason}</td>
                                <td>
                                    <div className='d-flex gap-2'>
                                        <Button variant="success" onClick={() => handleApprove(doctor._id)}>Approve</Button>
                                        <Button variant="danger" onClick={() => handleReject(doctor._id)}>Reject</Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default MyAppointment