import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditProfile = () => {
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
            const response = await axios.post('http://localhost:4023/api/v1/doctor/update-profile',
                {
                    headers: {
                        Authorization: auth?.token,
                    }
                });
            setProfile(response.data);
        } catch (error) {
            console.log('Error fetching profile data:', error);
        }
    };

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:4023/api/v1/department/view');
            setDepartments(response.data?.data);
        } catch (error) {
            console.log('Error fetching departments:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'profileImage') {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = () => {
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    [name]: reader.result
                }));
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setProfile((prevProfile) => ({
                ...prevProfile,
                [name]: value
            }));
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can make the API call to update the profile using the `profile` state
        console.log('Updated profile:', profile);
    };

    return (
        <div style={{ margin: '5rem 40vh' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className='d-flex gap-3 '>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                {/* <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group> */}

                <Form.Group controlId="profileImage" className='d-flex gap-3 mt-3'>
                    <Form.Label>Profile Image</Form.Label>
                    <input
                        type="file"
                        name="profileImage"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {profile.profileImage && (
                    <img src={profile.profileImage} alt="Profile" style={{ width: '200px', marginTop: '10px' }} />
                )}


                <Form.Group controlId="specialty" className='d-flex gap-3 mt-3'>
                    <Form.Label>Specialty</Form.Label>
                    <Form.Control
                        type="text"
                        name="specialty"
                        value={profile.specialty}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="education" className='d-flex gap-3 mt-3'>
                    <Form.Label>Education</Form.Label>
                    <Form.Control
                        type="text"
                        name="education"
                        value={profile.education}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="experience" className='d-flex gap-3 mt-3'>
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                        type="text"
                        name="experience"
                        value={profile.experience}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="address" className='d-flex gap-3 mt-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={profile.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="department" className='d-flex gap-3 mt-3'>
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        as="select"
                        name="department"
                        value={profile.department}
                        onChange={handleInputChange}
                    >
                        <option value="">Select department</option>
                        {departments?.map((department) => (
                            <option key={department._id} value={department.departmentName}>
                                {department.departmentName}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="shortDescription" className='d-flex gap-3 mt-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="shortDescription"
                        value={profile.shortDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>




                {/* Add more form fields for other profile properties */}

                <Button variant="success" type="submit" className="mt-4">
                    Update Profile
                </Button>
            </Form>
        </div>
    );
};

export default EditProfile;
