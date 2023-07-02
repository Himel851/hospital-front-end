import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";
import { useAuth } from "../../context/auth";
import { useRouter } from "next/router";

export default function AppointmentList() {
  const [auth, setAuth] = useAuth();
  const [list, setList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {

        const response = await axios.get(`http://localhost:4023/api/v1/appointment/view/doctor/${auth?._id}`,
          {
            headers: {
              Authorization: auth?.token,
            }
          }
        );
        setList(response?.data);
        console.log(response?.data)
      } catch (error) {
        // toast.error("Something went wrong");
      }
    };

    fetchInvoiceData();
  }, [router.query.id]);
  return (
    <Container className="py-5" style={{ marginTop: '4rem' }}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>
              <strong>Patient Name</strong>
            </th>
            <th>
              <strong>Approve</strong>
            </th>
            <th>
              <strong>Not Approve</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Domain customization</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <X className="text-danger" />
            </td>
          </tr>
          <tr>
            <td>FTP</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <Check className="text-success" />
            </td>
          </tr>
          <tr>
            <td>Database</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <X className="text-danger" />
            </td>
          </tr>
          <tr>
            <td>Support</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <Check className="text-success" />
            </td>
          </tr>
          <tr>
            <td>Backups</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <X className="text-danger" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}


