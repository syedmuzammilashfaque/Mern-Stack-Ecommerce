import React from 'react';
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";
import LoginSignup from "./components/User/LoginSignup/LoginSignup";
import Profile from "./components/User/Profile/Profile";
import ForgotPassword from './components/User/ForgotPassword/ForgotPassword';
import ResetPassword from './components/User/ResetPassword/ResetPassword';
import UpdatePassword from "./components/User/UpdatePassword/UpdatePassword";
import UpdateProfile from "./components/User/UpdateProfile/UpdateProfile";

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginSignup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/updatepassword" element={<UpdatePassword />} />
        <Route exact path="/updateprofile" element={<UpdateProfile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;