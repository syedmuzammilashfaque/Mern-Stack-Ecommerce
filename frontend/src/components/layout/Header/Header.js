import React from "react";
import "./Header.css";
import {
    Container,
    Dropdown,
    NavbarBrand,
    Image,
    Navbar,
    Form,
    Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MainLogo from "../../../images/main_logo.png";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="fixed navbar_section">
                <Container className="main_navbar">
                    <NavbarBrand className="navbar-brand">
                        <NavLink to="/">
                            <Image className="main_logo" src={MainLogo} alt="ma shop" />
                        </NavLink>
                    </NavbarBrand>

                    <Nav className="ms-auto">
                        <NavLink to="/cart" className="nav_item_cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                    </Nav>
                    <Navbar.Toggle
                        className="toggle_button navbar-toggler"
                        aria-controls="basic-navbar-nav"
                    >
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" nav me-auto">
                            <NavLink className="dropDownItem" to="/">
                                HOME
                            </NavLink>

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">PRODUCTS</Dropdown.Toggle>
                                <Dropdown.Menu style={{ border: "none" }}>
                                    <p className="dropDownItem">
                                        <NavLink to="#">LAPTOPS</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">GRAPHIC CARDS</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">MONITORS</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">HDD</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">SSD</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">NETWORK</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">RAM</NavLink>
                                    </p>

                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="#">PSU</NavLink>
                                    </p>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    USER ACCOUNT
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ border: "none" }}>
                                    <p className="dropDownItem">
                                        <NavLink to="/profile">
                                            <i
                                                style={{ fontSize: "15px" }}
                                                className="fa-solid fa-face-smile"
                                            ></i>
                                            &nbsp;&nbsp; MY PROFILE
                                        </NavLink>
                                    </p>
                                    <Dropdown.Divider />

                                    <p className="dropDownItem">
                                        <NavLink to="/orderhistory">
                                            <i
                                                style={{ fontSize: "15px" }}
                                                className="fa-brands fa-first-order"
                                            ></i>
                                            &nbsp;&nbsp; MY ORDERS
                                        </NavLink>
                                    </p>
                                    <Dropdown.Divider />

                                    <p className="dropDownItem">
                                        <NavLink to="/">
                                            <i
                                                style={{ fontSize: "15px" }}
                                                className="fa-solid fa-arrow-right-from-bracket"
                                            ></i>
                                            &nbsp;&nbsp; LOGOUT
                                        </NavLink>
                                    </p>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">ADMIN</Dropdown.Toggle>
                                <Dropdown.Menu style={{ border: "none" }}>
                                    <p className="dropDownItem">
                                        <NavLink to="/admindashboard">DASHBOARD</NavLink>
                                    </p>
                                    <Dropdown.Divider />
                                    <p className="dropDownItem">
                                        <NavLink to="/addproduct">ADD PRODUCT</NavLink>
                                    </p>
                                </Dropdown.Menu>
                            </Dropdown>

                            <NavLink className="dropDownItem" to="/login">
                                LOG IN
                            </NavLink>
                        </Nav>

                        <Form className="d-flex">
                            <div className="search_bar bg-light shadow-sm">
                                <div className="search_grp input-group">
                                    <input
                                        type="search"
                                        placeholder="Search entire store here..."
                                        aria-describedby="button-addon1"
                                        className="form-control border-0 bg-light"
                                    />
                                    <div
                                        style={{ background: "#ff5e14" }}
                                        className="rounded input-group-append"
                                    >
                                        <button
                                            id="button-addon1"
                                            type="submit"
                                            className="btn btn-link text-primary"
                                        >
                                            <i style={{ color: "#fff" }} className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                        <NavLink to="/cart" className="item_cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;
