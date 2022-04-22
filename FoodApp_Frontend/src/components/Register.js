import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import "../CSS/Register.css";
export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [role] = useState("Customer");
  const [post, setPost] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  const baseURL = "http://localhost:8080/addUser";

  // const selectType = (event) => {
  //   setType(event.target.value);
  // };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log("Errors are "+JSON.stringify(errors));
    createPost();
  };

  function readCaptcha(value) {
    console.log("Captcha value : " + value);
  }

  function createPost() {
    axios
      .post(baseURL, {
        fullName: fullName,
        email: email,
        password: password,
        contactNo: contactNo,
        address: address,
        city: city,
        zip: zipcode,
        role: "customer",
      })
      .then((response) => {
        setPost(response.data);
      });

    alert("You have been successfully registered.");
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
            <li class="nav-item">
              <button class="btn btn-outline-warning ml-lg-5" id="login_btn">
                <Link to="/login">Login </Link>
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
        <form onSubmit={handleSubmit(onSubmit)} class="container">
          <nav class="navbar navbar-expand-lg mb-lg-3 navbar-light bg-dark">
            <h3 class="text-white">Registration Form</h3>
          </nav>
          <div class="form-row ">
            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputEmail">FullName</label>
              <input
                {...register("fullName", {
                  required: true,
                  maxLength: 30,
                  minLength: 6,
                })}
                type="text"
                id="fullname"
                class="form-control"
                placeholder="Enter FullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && errors.fullName.type === "required" && (
                <span>This is required</span>
              )}
              {errors.fullName && errors.fullName.type === "maxLength" && (
                <span>Max length exceed</span>
              )}
              {errors.fullName && errors.fullName.type === "minLength" && (
                <span>Min length should be 5</span>
              )}
            </div>
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
            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputContact">Contact No </label>
              <input
                //  {...register("contactNo", { required: true, minLength: 10 })}
                type="text"
                class="form-control"
                name="contact"
                placeholder="Enter Contact number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
              {/* {errors.contactNo && errors.contactNo.type === "required" && (
                <span>This is required</span>
              )} */}
              {/* {errors.contactNo && errors.contactNo.type === "minLength" && (
                <span>Contanct number should have 10 digits</span>
              )} */}
            </div>
            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                name="address"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                // onChange={handleChange}
              />
            </div>

            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                name="city"
                placeholder="Enter City name "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                //onChange={handleChange}
              />
            </div>

            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputZip">Zip</label>
              <input
                // {...register("zipcode", {
                //   required: true,
                //   minLength: 6,
                //   maxLength: 6,
                // })}
                type="number"
                class="form-control"
                name="zip"
                placeholder="Enter Zip code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
              {/* {errors.zipcode && errors.zipcode.type === "required" && (
                <span>This is required</span>
              )} */}
              {/* {errors.zipcode && errors.zipcode.type === "maxLength" && (
                <span>Maximum length exceed</span>
              )}
              {errors.zipcode && errors.zipcode.type === "minLength" && (
                <span>Minimum length should be 6</span>
              )} */}
            </div>
            <div class="form-group col-md-6 mt-lg-3">
              <div className="App">
                <ReCAPTCHA
                  {...register("captcha", {
                    //required: true,
                  })}
                  sitekey="6Lc7k20fAAAAAApCMwBMsyYMtKqcx-CHMw-G8-qo"
                  onChange={readCaptcha}
                />
                {/* {errors.captcha && errors.captcha.type === "required" && (
                  <span class="errorMsg">This is required field</span>
                )} */}
              </div>
            </div>
            {/* 
            <div class="form-group col-md-2 mt-lg-4">
              <label class="mb-lg-2">Type </label>
              <div class="form-group col-md-1 form-inline">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="customer"
                    value="customer"
                    checked={type === "customer"}
                    onChange={selectType}
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Customer
                  </label>
                </div>
                <div class="form-group col-md-1">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="owner"
                      checked={type === "owner"}
                      value="owner"
                      onChange={selectType}
                    />
                    <label class="form-check-label" for="gridRadios2">
                      Owner
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div class="btn_submit mb-lg-3 mt-lg-3">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
