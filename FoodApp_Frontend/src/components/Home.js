import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/Home.css'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">
  <img id="logo" src="../../Images/foodAppLogo.jpg" width="80" height="50" alt=""></img>
  </a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <button class="btn btn-outline-warning" id="home_btn"><Link to="/">Home </Link></button>
      </li>
      <li class="nav-item">
      <button class="btn btn-outline-warning ml-lg-5" id="login_btn"><Link to="/login">Login </Link></button>
      </li>
      <li class="nav-item">
      <button class="btn btn-outline-warning" id="register_btn"><Link to="/register">Register </Link></button>
      </li>
    </ul>
    <div>
    <form class=" search form-inline my-2 my-lg-0 ">
      <input class="form-control  mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button id="btn_search" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>

<div class="carousel_div">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../../Images/img2.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../Images/img3.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../Images/img4.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
</div>

    </div>
  )
}
