import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CustomerHeader() {
    const navigate=useNavigate();

    function logout() {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("role");
        navigate("/")
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
            <li class="nav-item">
              <button class="btn btn-outline-warning ml-lg-5" id="login_btn" onClick={logout}>
                Logout
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
      </div>
  )
}
