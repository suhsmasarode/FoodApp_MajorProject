import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import '../CSS/CreateRestaurant.css'
export default function CreateRestaurant(props) {
  const loc = useLocation();
  const user=loc.state;
 console.log(user+" state Location")
  const [restroName, setRestroName] = useState("");
  const [location, setLocation] = useState("");
  
  console.log("UserId is :"+user)
  const [post, setPost] = React.useState(null);
 
 // console.log("email is " + data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseURL = "http://localhost:8080/addRestaurant";

  const onSubmit = (e) => {
    createPost();
  };
  const formData={restroName:restroName,location:location,user:user}
  console.log("form data :"+JSON.stringify(formData));
  function createPost() {
  
    axios
      .post(baseURL,formData)
      .then((response) => {
        console.log("Response is: "+ response)
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
                <Link to="/adminDashboard">Admin Dashboard</Link>
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
            <h3 class="text-white">Create Restaurant Form</h3>
          </nav>
          <div class="form-row ">
            <div class="form-group col-md-6 mt-lg-3">
              <label>Restaurant Name</label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Enter Restaurant Name"
                value={restroName}
                onChange={(e) => setRestroName(e.target.value)}
              />
            </div>
         
          <div class="form-group col-md-6 mt-lg-3">
            <label>Location</label>
            <input
              type="text"
              class="form-control"
              name="email"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <div class="button_submit mb-lg-3 mt-lg-3">
            <button type="submit" class="btn btn-primary">
            CreateRestaurant
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}
