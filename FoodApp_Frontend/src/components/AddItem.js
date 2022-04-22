import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";


export default function AddItem() {
    const data = useLocation();
    const menuCategory = data.state; //data from Viewcategory.js
    const restaurants = data.state.restaurants;
    // console.log("category Data " + JSON.stringify(catData))
    // console.log("Restro Data" + JSON.stringify(restaurants))
    const navigate = useNavigate();
    //console.log("Data of Category of Id: "+ JSON.stringify(catData));
    const [price, setPrice] = useState(0);
    const [itemName, setItemName] = useState("");
    const [categoryName, setCategoryName] = useState(menuCategory.categoryName)
    // const [image, setImage] = useState([]);
    const [post, setPost] = React.useState(null);

    //  console.log("image : "+image)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const baseURL = "http://localhost:8080/addItem";

    const onSubmit = () => {

        console.log("In form submit method")
        addItem();
    };
    //   function onImageChange(e){
    //       setImage([...e.target.files])
    //   }

    const itemData = { menuItemName: itemName, price: price, menuCategory: menuCategory, restaurants: restaurants };
    const email = data.state.restaurants.user.email;

    const role = data.state.restaurants.user.role;
    // sessionStorage.setItem("email",email);
    // sessionStorage.setItem("role",role);
    const userData = { userEmail: email, role: role };
    //console.log("user data : "+JSON.stringify(userData))
    console.log("Item data" + JSON.stringify(itemData));
    function addItem() {
        axios
            .post(baseURL, itemData)
            .then((response) => {
                setPost(response.data);
                navigate("/showCategory", { state: restaurants })
                alert('Item added successfully');
            });
    }

    function click() {
        alert("button clicked.....")
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
                        <h3 class="text-white">Add Item</h3>
                    </nav>
                    <div class="form-row ">
                        <div class="form-group col-md-6 mt-lg-3">
                            <label for="categoryName"> Category Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder={categoryName}
                                value={categoryName}
                                onChange={(e) => setItemName(e.target.value)}
                                disabled
                            />
                        </div>
                    </div>
                    <div class="form-row ">
                        <div class="form-group col-md-6 mt-lg-3">
                            <label for="itemName"> Item Name</label>
                            <input
                                type="text"
                                id="itemName"
                                class="form-control"
                                placeholder="Enter Item Name here"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row ">
                        <div class="form-group col-md-6 mt-lg-3">
                            <label for="price"> Price</label>
                            <input
                                type="number"
                                id="price"
                                class="form-control"
                                placeholder="Enter Price here"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* <div class="form-row ">
                        <div class="mb-3 col-md-6 mt-lg-3">
                            <label for="formFile" class="form-label"> Choose Image</label>
                            <input type="file" multiple accept="image/*" onChange={onImageChange} />
                        </div>
                    </div> */}
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

