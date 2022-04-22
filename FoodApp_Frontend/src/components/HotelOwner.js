import React from "react";
import { Link } from "react-router-dom";
import '../CSS/HotelOwner.css'
import RegisterHotelOwner from "./RegisterHotelOwner";
export default function HotelOwner() {


  return (
    <div>
      
      <div >
        <nav class="navbar2 container navbar-expand-lg bg-light navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="container d-flex justify-content-center">
            <div class="row">
              <div class="col-12 d-flex justify-content-center mb-3">
                
              </div>
              <div class="col-12 d-flex justify-content-center">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav align-items-center mx-auto">
                    <li class="nav-item">
                    <Link to="/registerHotelOwner" class="btn btn-success-outline">Register HotelOwner</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/showHotelOwners" class="btn btn-success-outline">Show All Owners</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
