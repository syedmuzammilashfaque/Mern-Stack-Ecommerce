import React from "react";
import "./ResetPassword.css";
import { Container, Col, Row, } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {


    return (
        <>
            <Container className="main-container">
                <Row className="align-items-center justify-content-center">
                    <Col xxl={12} xl={8} lg={8} md={12} sm={12} xs={12} className="main-reset-section justify-content-center align-items-center">
                        <h3>Enter security code</h3>
                        <hr />
                        <p>Please check your emails for a message with your code. Your code is 6 numbers long.</p>

                        <Row className="align-items-center justify-content-space-around">
                            <Col md={6}>
                                <input type="number" placeholder="Enter Code" />
                            </Col>
                            <Col md={6}>
                                <label>We sent your code to:
                                    syedmuzammilashfaque@gmail.com</label>
                            </Col>
                        </Row>
                        <hr className="mt-4" />

                        <Row className="justify-content-center align-items-center">

                            <Col md={6}>
                                <NavLink id="link-btn" to="/forgotpassword">Didn't get a code?</NavLink>
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
            </Container>
        </>
    )
}

export default ResetPassword;