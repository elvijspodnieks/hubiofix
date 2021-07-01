
import app from "./base";
import hcbgImage from "./img/bggg.jpg";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import React, { Component } from 'react';

import { render } from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css"


    import firebase from "firebase/app";
    import "firebase/auth";


    

    
const Home = () => {
  return (
  

      <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+hcbgImage+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
      
      <div className="container">
        <div className="nez">
        <Sidebar />
        </div>
        

        <div className="nez2">
        <Topbar/>
      

        </div>

    
        
        
        
      </div>
      
    </div>
  );
};





export default Home;



