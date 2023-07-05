import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditProfilePage = () => {
  const [profile, setProfile] = useState({
    id: '',
    name: '',
    department: '',
    phone: '',
    profileImage: '',
    specialty: [],
    education: '',
    experience: '',
    address: '',
    shortDescription: ''
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchProfileData();
    fetchDepartments();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('http://localhost:4023/api/v1/doctor/update-profile');
      setProfile(response.data);
    } catch (error) {
      console.log('Error fetching profile data:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:4023/api/v1/department/view');
      setDepartments(response.data);
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching departments:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can make the API call to update the profile using the `profile` state
    console.log('Updated profile:', profile);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="department">
        <Form.Label>Department</Form.Label>
        <Form.Control
          as="select"
          name="department"
          value={profile.department}
          onChange={handleInputChange}
        >
          <option value="">Select department</option>
          {departments?.map((department) => (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* Add more form fields for other profile properties */}

      <Button variant="success" type="submit" className="mt-4">
        Update Profile
      </Button>
    </Form>
  );
};

export default EditProfilePage;
