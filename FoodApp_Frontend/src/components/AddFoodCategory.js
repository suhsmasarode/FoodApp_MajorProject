import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OwnerDashboard from './OwnerDashboard';

export default function AddFoodCategory() {
  const data=useLocation();
  const restaurants = data.state;
  const navigate = useNavigate();
console.log("Data of Restaurant of Id: "+ JSON.stringify(data.state.restroId));
  const [categoryName, setCategoryName] = useState("");
  const [post, setPost] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseURL = "http://localhost:8080/addCategory";

  const onSubmit = (e) => {
    // e.preventDefault();
    addCategory();
  };

  
  const categoryData={categoryName:categoryName,restaurants : restaurants};
  const email = data.state.user.email;
  const role = data.state.user.role;
  // sessionStorage.setItem("email",email);
  // sessionStorage.setItem("role",role);
   const userData= {userEmail:email,role:role};

  console.log("Category data" + JSON.stringify(categoryData)); 
  function addCategory() {
    axios
      .post(baseURL, categoryData)
      .then((response) => {
        setPost(response.data);
         navigate("/OwnerDashboard",{state:userData})
       
      });
      
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
                <Link to="/ownerDashboard" state={userData}>HotelOwner Dashboard</Link>
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
            <h3 class="text-white">Add Food Category</h3>
          </nav>
          <div class="form-row ">
            <div class="form-group col-md-6 mt-lg-3">
              <label for="inputEmail"> Category Name</label>
              <input
                {...register("categoryName", {
                  required: true,
                  maxLength: 30,
                  minLength: 6,
                })}
                type="text"
                id="fullname"
                class="form-control"
                placeholder="Enter Category here"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
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
          </div>
          <div class="btn_submit mb-lg-3 mt-lg-3">
            <button type="submit" class="btn btn-primary">
             Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
