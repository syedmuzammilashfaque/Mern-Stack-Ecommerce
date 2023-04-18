import React from "react";
import "./UpdateProfile.css";
import { Container, Col, Row, } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const UpdateProfile = () => {

    return (
        <>
            <Container className="main-container">
                <Row className="align-items-center justify-content-center">

                    <Col xxl={12} xl={8} lg={8} md={12} sm={12} xs={12} className="edit-profile-section justify-content-center align-items-center">
                        <h3>Edit Profile</h3>
                        <p>Manage your profile info</p>
                        <hr />

                        <Row className="justify-content-center align-items-center">
                            <Col md={4}>
                                image
                            </Col>
                        </Row>

                        <Row className="align-items-center">

                            <Col md={4}>
                                <label>Full name</label>
                                <br />
                                <input type="name" placeholder="Syed Muzammil Ashfaque" />
                            </Col>

                            <Col md={4}>
                                <label>Email</label>
                                <br />
                                <input type="email" placeholder="syedmuzammilashfaque@gmail.com" />
                            </Col>

                            <Col md={4}>
                                <label>Number</label>
                                <br />
                                <input type="number" placeholder="03151194431" />
                            </Col>
                        </Row>

                        <hr className="mt-4" />

                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <NavLink className="change-password-btn" to="/updatepassword">Change Password</NavLink>
                            </Col>

                            <Col md={6} className="d-flex">
                                <Button
                                    id="save-button"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Save Changes
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Container >

        </>
    )
}

export default UpdateProfile;