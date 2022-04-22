import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import AdminDashboard from "./AdminDashboard";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:8080/login";
  const loginData = { userEmail: email, userPassword: password };
  function handleLogin(e) {
    e.preventDefault();
    axios.post(baseURL, loginData).then((response) => {
      //console.log("fetched response details :"+response.data.role)

      if (response.data.role === "admin") {
        sessionStorage.setItem(
          "email",
          JSON.stringify(response.data.userEmail)
        );
        sessionStorage.setItem("role", JSON.stringify(response.data.role));
        sessionStorage.setItem("id",JSON.stringify(response.data.id));
        window.location.href = "http://localhost:3000/adminDashboard";
      } else if (response.data.role === "customer") {
        sessionStorage.setItem(
          "email",
          JSON.stringify(response.data.userEmail)
        );
        sessionStorage.setItem("id",JSON.stringify(response.data.id));
        sessionStorage.setItem("role", JSON.stringify(response.data.role));
        window.location.href = "http://localhost:3000/customerDashboard";
      } else if (response.data.role === "owner") {
        sessionStorage.setItem(
          "email",
          JSON.stringify(response.data.userEmail)
        );
        sessionStorage.setItem("id",JSON.stringify(response.data.id));
        sessionStorage.setItem("role", JSON.stringify(response.data.role));
        //window.location.href="http://localhost:3000/ownerDashboard";
        navigate("/ownerDashboard", { state: response.data });
      } else {
        alert("Please enter valid credentials");
      }
    });

    // alert("You have logged in successfully.");
    // this.setState(this.initialState);
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img
            id="logo"
            src="../../Images/foodAppLogo.jpg"
            width="80"
            height="50"
            alt=""
          ></img>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <button class="btn btn-outline-warning" id="home_btn">
                <Link to="/">Home </Link>
              </button>
            </li>
          </ul>
          <div>
            <form class=" search form-inline my-2 my-lg-0 ">
              <input
                class="form-control  mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                id="btn_search"
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="form container mt-lg-5">
        <form class="container" onSubmit={handleLogin}>
          <nav class="navbar navbar-expand-lg mt-lg-3 mb-lg-3 navbar-light bg-dark">
            <h3 class="text-white">Login Form</h3>
          </nav>
          <div class="form-row">
            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Enter Eamil id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div class="btn_submit mb-lg-3 mt-lg-3">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
