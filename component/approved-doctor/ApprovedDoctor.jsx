import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import styles from './approve.module.scss'
import axios from 'axios';

const ApprovedDoctor = () => {
    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        fetchDoctorList();
    }, []);

    const fetchDoctorList = async () => {
        try {
            const response = await axios.get('http://localhost:4023/api/v1/doctor/approved/all');
            const { data } = response.data;
            setDoctorList(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching doctor list:', error);
        }
    };
    return (
        <div style={{ marginTop: '4rem' }} className={`${styles.approve}`} >
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>RegId</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorList.map((doctor, index) => (
                        <tr key={doctor._id}>
                            <td>{index + 1}</td>
                            <td>{doctor.regId}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.age}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.gender}</td>
                            <td>{doctor.department}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ApprovedDoctor