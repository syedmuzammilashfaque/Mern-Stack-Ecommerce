import React from "react";
import "./ForgotPassword.css";
import { Container, Col, Row, } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();

    return (
        <>
            <Container className="main-container">
                <Row className="align-items-center justify-content-center">

                    <Col xxl={12} xl={8} lg={8} md={12} sm={12} xs={12} className="main-forgot-section justify-content-center align-items-center">
                        <h3>Forgot your password?</h3>
                        <hr />
                        <p> Enter your email address below and we’ll send you a link to reset your password</p>

                        <Row className="align-items-center">
                            <Col md={6}>
                                <label>Enter Your Email</label>
                                <br />
                                <input type="email" placeholder="Please enter your Email" />
                            </Col>
                        </Row>
                        <hr className="mt-4" />

                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <button className="goback-btn" onClick={() => navigate(-1)}>Go back</button>
                            </Col>

                            <Col md={6} className="d-flex">
                                <Button
                                    id="cancil-button"
                                    type="cancil"
                                    fullWidth
                                    variant="contained"
                                >
                                    Cancil
                                </Button>
                                <Button
                                    id="continue-button"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Continue
                                </Button>
                            </Col>

                        </Row>

                    </Col>
                </Row>

            </Container >

        </>
    )
}

export default ForgotPassword;