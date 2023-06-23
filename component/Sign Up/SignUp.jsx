import React, { useEffect, useState } from "react";
import { Form, Button, Image, ButtonGroup, Dropdown } from "react-bootstrap";
import style from './signup.module.scss'
import axios from "axios";
import Link from "next/link";

const SignUp = () => {
    const [departmentOptions, setDepartmentOptions] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        department: "",
    });
    const [userType, setUserType] = useState('patient');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const { name, age, gender, phone, email, password, department } = formData;
        // const apiEndpoint = isDoctorRegistration ? 'doctor/register' : 'patient/register';
        const payload = { name, age, gender, phone, email, password };
        if (userType === "doctor") {
            payload.department = department;
        }
        try {
            console.log(userType);
            const response = await axios.post(`http://localhost:4023/api/v1/${userType}/register`, payload);
            console.log(response.data); // do something with the response if needed
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchDepartmentOptions = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4023/api/v1/department/view"
                );
                setDepartmentOptions(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchDepartmentOptions();
    }, []);

    const handleDepartmentSelection = (department) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          department: department,
        }));
      };
      


    return (
        <div
            className={style.signup}
            style={{
                backgroundImage: `url(${'/image/login-bg.jpg'})`,
                height: "100vh",
                backgroundSize: "cover",
            }}
        >
            <div className="container">
                <Form onSubmit={handleFormSubmit} className={style.form}>
                    <div className={style.formGroup}>
                        <div className="btnGroup float-end">
                            <ButtonGroup aria-label="User Type">
                                <Button variant={userType === 'patient' ? 'primary' : 'outline-primary'} active={userType === 'patient'} onClick={() => setUserType('patient')} >
                                    Patient
                                </Button>
                                <Button variant={userType === 'doctor' ? 'primary' : 'outline-primary'} active={userType === 'doctor'} onClick={() => setUserType('doctor')}>
                                    Doctor
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <div className={style.patient}>
                                <Image className={style.patientLogo} src='/image/patient-logo.png' />
                                {userType === 'doctor' && <h1>Doctor Sign Up</h1>}
                                {userType === 'patient' && <h1>Patient Sign Up</h1>}
                            </div>
                            <div className="d-flex gap-2">
                                <Form.Group controlId="formBasicName" className="mb-1" md="6" lg="4">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        style={{ width: '90%' }}
                                        type="text"
                                        placeholder="Enter name"
                                        name="name" className="form-control" required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail" className="mb-1" md="6" lg="4">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        style={{ width: '90%' }}
                                        type="email"
                                        placeholder="Enter email"
                                        name="email" className="form-control" required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>
                            </div>

                            <div className='d-flex mt-3'>
                                <Form.Group controlId="formBasicName" className="mb-1" md="6" lg="4">
                                    <div className="d-flex gap-2">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            className='ageInput form-control'
                                            style={{ width: '100px' }}
                                            type="number"
                                            placeholder="Age"
                                            name="age" required
                                            value={formData.age}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="gender" className="ms-4" >Gender</label>
                                        <select name="gender" className="form-control ms-2" required
                                            value={formData.gender}
                                            onChange={handleInputChange} style={{ width: '100px' }}>
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </Form.Group>
                            </div>

                            {userType === "doctor" && (
                                <Form.Group controlId="formBasicDepartment" className="mb-1" md="6" lg="4">
                                    <div className="d-flex gap-3 mt-3">
                                    <Form.Label>Department</Form.Label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="department-dropdown">
                                            {formData.department ? formData.department.departmentName : "Select Department"}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {departmentOptions?.map((department) => (
                                                <Dropdown.Item
                                                    key={department._id}
                                                    onClick={() => handleDepartmentSelection(department)}
                                                >
                                                    {department.departmentName}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </div>
                                </Form.Group>
                            )}
{/* 

                            {userType === "doctor" && (
                                <Form.Group controlId="formBasicDepartment" className="mb-1" md="6" lg="4">

                                    <Form.Label>Department</Form.Label>
                                    <Form.Control
                                        style={{ width: "90%" }}
                                        as="select"
                                        name="department"
                                        className="form-control"
                                        required
                                        value={formData.department}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Department</option>
                                        {departmentOptions?.departmentName?.map((department) => (
                                            <option key={department._id} value={department._id}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            )} */}


                            <Form.Group controlId="formBasicName" className="mb-1" md="6" lg="4">
                                <Form.Label>Number</Form.Label>
                                <Form.Control
                                    style={{ width: '90%' }}
                                    type="number"
                                    placeholder="Enter Number"
                                    name="phone" className="form-control" required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />

                            </Form.Group>

                            <Form.Group
                                controlId="formBasicPassword"
                                className="mb-1"
                                md="6"
                                lg="4"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    style={{ width: '90%' }}
                                    type="password"
                                    placeholder="Password"
                                    name="password" className="form-control" required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                {userType === 'doctor' && <Button variant="primary" type="submit">
                                    Sign Up as Doctor
                                </Button>}
                                {userType === 'patient' && <Button variant="primary" type="submit">
                                    Sign Up as Patient
                                </Button>}
                            </div>
                            <hr />
                            <div className="d-flex justify-content-center accountBtn">
                                <Link href='/' >
                                    <Button variant="success" type="submit">
                                        Already Have an account?
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;