import React, { useState } from "react";
import { Form, Button, Image, ButtonGroup } from "react-bootstrap";
import "./login.module.scss";
import axios from "axios";
import Link from "next/link";
import style from './login.module.scss'
import { useRouter } from "next/router";
import { useAuth } from "../../context/auth";
import Header from "../navbar/Header";
import { toast } from "react-toastify";



const Login = () => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('patient');
    const router = useRouter();
    const [auth, setAuth] = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:4023/api/v1/${userType}/signin`, {
                email,
                password,
            });
            const data = response.data;
            toast.success("Login Successful");
            if (data.success) {
                localStorage.setItem('auth', JSON.stringify(response.data.data));
                setAuth(data.data); // Update the authentication state using setAuth
                console.log(data.data)
                { userType === 'admin' && router.replace(`/dashboard`) };
                { userType === 'doctor' && router.replace(`/doctor-profile/${data?.data?._id}`) };
                { userType === 'patient' && router.replace(`/doctor-list`) };
            }
        } catch (error) {
            console.error(error);
            toast.error("Login Failed");
        }
    };


    return (
        <div>
            <div
                className={style.patientLogin}
                style={{
                    backgroundImage: `url(${'/image/login-bg.jpg'})`,
                    height: "100vh",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <Form onSubmit={handleLogin} className={style.form}>
                        <div className={style.formGroup}>
                            <div className="btnGroup float-end">
                                <ButtonGroup aria-label="User Type">
                                    <Button variant={userType === 'patient' ? 'primary' : 'outline-primary'} active={userType === 'patient'} onClick={() => setUserType('patient')} >
                                        Patient
                                    </Button>
                                    <Button variant={userType === 'doctor' ? 'primary' : 'outline-primary'} active={userType === 'doctor'} onClick={() => setUserType('doctor')}>
                                        Doctor
                                    </Button>
                                    <Button variant={userType === 'admin' ? 'primary' : 'outline-primary'} active={userType === 'admin'} onClick={() => setUserType('admin')}>
                                        Admin
                                    </Button>
                                </ButtonGroup>

                            </div>

                            <div><div className={style.patient}>
                                <Image className={style.patientLogo} src='/image/patient-logo.png' />
                                {/* <h1>{userType} Login</h1> */}
                                {userType === 'admin' && <h1>Admin Login</h1>}
                                {userType === 'doctor' && <h1>Doctor Login</h1>}
                                {userType === 'patient' && <h1>Patient Login</h1>}
                            </div>
                                <Form.Group controlId="formBasicEmail" className="mb-3" md="6" lg="4">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        style={{ width: '90%' }}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email"
                                    />

                                </Form.Group>
                                <Form.Group
                                    controlId="formBasicPassword"
                                    className="mb-3"
                                    md="6"
                                    lg="4"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        style={{ width: '90%' }}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                    />

                                </Form.Group>


                                <div className="d-flex justify-content-center">

                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>


                                </div>
                                <hr />
                                <div className={`{style.accountBtn} d-flex justify-content-center`} >
                                    <Link href="/sign-up">
                                        <Button variant="success" type="submit">
                                            Create new account
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
