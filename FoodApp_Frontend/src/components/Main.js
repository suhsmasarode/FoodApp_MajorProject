import React from 'react'
import Home from './Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Test from './Test'
import AdminDashboard from './AdminDashboard'
import CustomerDashboard from './CustomerDashboard'
import Restaurants from './Restaurants'
import RegisterHotelOwner from './RegisterHotelOwner'
import OwnerDashboard from './OwnerDashboard'
import CreateRestaurant from './CreateRestaurant'
import ShowHotelOwners from './ShowHotelOwners'
import ShowRestaurants from './ShowRestaurants'
import EditRestaurant from './EditRestaurant'
import AddFoodCategory from './AddFoodCategory'
import ViewCategory from './ViewCategory'
import AddItem from './AddItem'
import ShowMenu from './ShowMenu'
import ShowMenuItem from './ShowMenuItem'
import AddToCart from './AddToCart'
export default function Main() {
  return (
    <div>
       
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/adminDashboard' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/customerDashboard' element={<CustomerDashboard></CustomerDashboard>}></Route>
          <Route path='/ownerDashboard' element={<OwnerDashboard></OwnerDashboard>}></Route>
          <Route path='/registerHotelOwner' element={<RegisterHotelOwner></RegisterHotelOwner>}></Route>
          <Route path='/createRestaurant' element={<CreateRestaurant></CreateRestaurant>}></Route>
          <Route path='/showHotelOwners' element={<ShowHotelOwners></ShowHotelOwners>}></Route>
          <Route path='/showRestaurants' element={<ShowRestaurants></ShowRestaurants>}></Route>
          <Route path='/editRestaurant' element={<EditRestaurant></EditRestaurant>}></Route>
          <Route path='/addFoodCategory' element={<AddFoodCategory></AddFoodCategory>}></Route>
          <Route path='/showCategory' element={<ViewCategory></ViewCategory>}></Route>
          <Route path='/addItem' element={<AddItem></AddItem>}></Route>
          <Route path='/showMenu' element={<ShowMenu></ShowMenu>}></Route>
          <Route path='/showMenuItem' element={<ShowMenuItem></ShowMenuItem>}></Route>
          <Route path='/addToCart' element={<AddToCart></AddToCart>}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}
