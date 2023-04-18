import React from "react";
import "./UpdatePassword.css";
import { Container, Col, Row, } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const UpdatePassword = () => {

    return (
        <>
            <Container className="main-container">
                <Row className="align-items-center justify-content-center">

                    <Col xxl={12} xl={8} lg={8} md={12} sm={12} xs={12} className="update-password-section justify-content-center align-items-center">
                        <h3>Change password</h3>
                        <hr />
                        <p>Your password must be at least six characters and should include a combination of numbers, letters and special characters (!$@%).</p>

                        <Row className="align-items-center">
                            <Col md={6}>
                                <input type="email" placeholder="Current password" />
                                <br />
                                <input type="email" placeholder="New password" />
                                <br />
                                <input type="email" placeholder="Retype new password" />
                            </Col>
                        </Row>
                        <hr className="mt-4" />

                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <NavLink to="/forgotpassword">Forgot Password?</NavLink>
                            </Col>

                            <Col md={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Change Password
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Container >

        </>
    )
}

export default UpdatePassword;