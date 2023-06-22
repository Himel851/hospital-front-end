import React from "react";
import { Container, Table } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";

export default function AppointmentList() {
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


