import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Container, Col, Row } from "react-bootstrap";
import { Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { GoogleLogin } from "react-google-login";
import "./LoginSignup.css";
import Input from "./Input";
import Icon from "./Icon";

const LoginSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (value) => {
        setPhone(value);
    };


    const [user, setUser] = useState({
        name: "",
        email: "",
        phone,
        password: "",
    })

    // const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setUser(user.phone);
    };


    const handleSubmit = () => { };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        // const result = res?.profileObj;
        // const token = res?.tokenId;
        try {
            console.log(res);

            // dispatch({ type: "AUTH", data: { result, token } });
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later");
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };


    return (
        <>
            <Container className="main-container">
                <Row className="auth-text-section text-center align-items-center">
                    <Col md={6}>
                        <div>
                            <h5>
                                {isSignup
                                    ? "Create your MA Shop Account."
                                    : "Welcome to MA Shop! Please login."}
                            </h5>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <p>
                                {isSignup ? "Already member?" : "New member?"}
                                &nbsp;
                                <span className="navigate-button" onClick={switchMode}>
                                    {isSignup ? "Login" : "Register"}
                                </span>
                                &nbsp;here.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center justify-content-center">
                        <Col xxl={12} xl={9} lg={9} md={12} sm={12} xs={12} className="main-auth-section align-items-center">

                            <Col md={4} sm={12}>
                                {isSignup && (
                                    <>
                                        <Input
                                            className="text-field"
                                            name="name"
                                            label="Full Name"
                                            value={user.name}
                                            onChange={handleChange}
                                            autoFocus
                                        />

                                    </>
                                )}

                                <Input
                                    className="text-field"
                                    name="email"
                                    label="Email Address"
                                    value={user.email}
                                    onChange={handleChange}
                                    type="email"
                                    autoFocus
                                />

                                {isSignup && (
                                    <PhoneInput
                                        className="input-value"
                                        id="phone"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        defaultCountry="PK"
                                    />
                                )}

                                <Input
                                    className="input-value"
                                    name="password"
                                    label="Password"
                                    value={user.password}
                                    onChange={handleChange}
                                    type={showPassword ? "text" : "password"}
                                    handleShowPassword={handleShowPassword}
                                />

                                {!isSignup && (
                                    <div className="forgotBtn">
                                        <NavLink to="/forgotpassword">Forgot Password?</NavLink>
                                    </div>
                                )}
                            </Col>

                            <Col md={4} sm={12}>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className="auth-button"
                                >
                                    {isSignup ? "Sign Up" : "Login"}
                                </Button>
                                {isSignup && (
                                    <Typography
                                        className="text-section"
                                        gutterBottom
                                        variant="body2"
                                        component="p"
                                    >
                                        "By clicking “SIGN UP”, I agree to MA Shop Terms of Use and
                                        Privacy Policy"
                                    </Typography>
                                )}
                                <Typography
                                    className="text-section"
                                    gutterBottom
                                    variant="body2"
                                    component="p"
                                >
                                    {isSignup ? " Or, sign up with" : "Or, login with"}
                                </Typography>
                                <Button
                                    style={{ backgroundColor: "rgb(59, 89, 152)", color: "#fff" }}
                                    className="auth-facebook-button"
                                    fullWidth
                                    variant="contained"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;Login
                                    with Facebook
                                </Button>
                                <GoogleLogin
                                    clientId="754172843078-20ude5hgc7cb5mu3o7hii4n0vkci537p.apps.googleusercontent.com"
                                    render={(renderProps) => (
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(211, 72, 54)",
                                                color: "#fff",
                                            }}
                                            className="auth-google-button"
                                            fullWidth
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            startIcon={<Icon />}
                                            variant="contained"
                                        >
                                            Login with Google
                                        </Button>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleFailure}
                                    cookiePolicy="single_host_origin"
                                />
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default LoginSignup;
