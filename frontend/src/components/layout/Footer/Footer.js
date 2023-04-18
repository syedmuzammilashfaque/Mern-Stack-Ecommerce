import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import MainLogo from "../../../images/main_logo.png";
const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-2 pb-2">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Orangi Town Karachi </span>
                                    </div>
                                    <br /> <br />
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>315 11944 31</span>
                                    </div>
                                    <br /> <br />
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>syedmuzammilashfaque@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content pt-2 pb-3">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <NavLink to="/">
                                            <img src={MainLogo} className="img-fluid" alt="logo" />
                                        </NavLink>
                                    </div>
                                    <div className="footer-text">
                                        <p>
                                            Welcome to MA Shop. Online Computer store in Pakistan. Buy
                                            Mackbook, Dell, Lenovo, HP, Acer laptops at best prices in
                                            Pakistan
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <br />
                                        <h3>Products</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <NavLink to="#">Laptops</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Monitors</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Printers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Hard Drives</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Network Products</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>
                                            Don’t miss to subscribe to our new feeds, kindly fill the
                                            form below.
                                        </p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="email" placeholder="Email Address" />
                                            <button>
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="footer-social-icon pt-2 ">
                                        <span>Follow us</span>
                                        <NavLink to="#">
                                            <i className="fab fa-facebook-f facebook-bg"></i>
                                        </NavLink>
                                        <NavLink to="#">
                                            <i className="fab fa-twitter twitter-bg"></i>
                                        </NavLink>
                                        <NavLink to="#">
                                            <i className="fab fa-google-plus-g google-bg"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>MA Shop 2022, All Right Reserved</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <NavLink to="#">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Terms</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Privacy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Policy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
