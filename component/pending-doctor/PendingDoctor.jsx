import React, { useEffect, useState } from 'react'
import styles from './pending.module.scss'
import { Button, Table } from 'react-bootstrap'
import axios from 'axios';

const PendingDoctor = () => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    fetchDoctorList();
  }, []);

  const fetchDoctorList = async () => {
    try {
      const response = await axios.get('http://localhost:4023/api/v1/doctor/pending/all');
      const { data } = response.data;
      setDoctorList(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching doctor list:', error);
    }
  };

  const handleApprove = async (doctorId) => {
    try {
      const response = await axios.get(`http://localhost:4023/api/v1/admin/approve/doctor/${doctorId}`);
      const { success, message } = response.data;
      if (success) {
        console.log(message);
        // Refresh the doctor list
        fetchDoctorList();
      }
    } catch (error) {
      console.error('Error approving doctor:', error);
    }
  };

  const handleReject = async (doctorId) => {
    try {
      const response = await axios.get(`http://localhost:4023/api/v1/admin/reject/doctor/${doctorId}`);
      const { success, message } = response.data;
      if (success) {
        console.log(message);
        // Refresh the doctor list
        fetchDoctorList();
      }
    } catch (error) {
      console.error('Error rejecting doctor:', error);
    }
  };
  

  return (
    <div style={{ marginTop: '4rem' }} className={styles.pending}>
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
            <th>Actions</th>
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
              <td>
                <div className='d-flex gap-2'>
                  <Button variant="success" onClick={() => handleApprove(doctor._id)}>Approve</Button>
                  <Button variant="danger" onClick={() => handleReject(doctor._id)}>Reject</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PendingDoctor