import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAuth } from "../../context/auth";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

export default function AppointmentList() {
  const [auth, setAuth] = useAuth();
  const [list, setList] = useState([]);
  const router = useRouter();
  console.log(router?.query?.id);
  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4023/api/v1/appointment/view/doctor/${router?.query?.id}`
        );
        setList(response?.data?.data);
        console.log(response?.data);
      } catch (error) {
        // toast.error("Something went wrong");
      }
    };

    fetchInvoiceData();
  }, [router.query.id]);

  const handleApprove = async (doctorId) => {
    try {
      const response = await axios.get(
        `http://localhost:4023/api/v1/admin/approve/doctor/${doctorId}`
      );
      const { success, message } = response.data;
      console.log(success)
      if (success) {
        console.log(message);
        // Refresh the doctor list
        toast.success("Doctor approve successful......");
      }
    } catch (error) {
      console.error("Error approving doctor:", error);
      toast.error("Doctor approve failed......");
    }
  };

  const handleReject = async (doctorId) => {
    try {
      const response = await axios.get(
        `http://localhost:4023/api/v1/admin/reject/doctor/${doctorId}`
      );
      const { success, message } = response.data;
      if (success) {
        console.log(message);
        // Refresh the doctor list
        toast.success("Doctor Rejected successful......");
      }
    } catch (error) {
      console.error("Error rejecting doctor:", error);
      toast.error("Doctor rejected failed......");
    }
  };

  return (
    <Container className="py-5" style={{ marginTop: "4rem" }}>
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
          {list?.map((item) => (
            <tr key={item?._id}>
              <td>{item?.patientName}</td>
              <td>{item?.patientGender}</td>
              <td>{item?.patientAge}</td>
              <td>{item?.slot}</td>
              <td>{item?.reason}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button
                    variant="success"
                    onClick={() => handleApprove(item._id)}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleReject(item._id)}
                  >
                    Reject
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
