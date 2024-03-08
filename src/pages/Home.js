import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/Banner.jpg";
import "../styles/HomeStyles.css";
import Menu from "./Menu";

const Home = () => {
  return (
    
    <div>

      <div className="home" style={{ backgroundImage: `url(${Banner})`, backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>
        <div className="headerContainer">
          <h1>Classy Cafe's</h1>
          <p>The Taste of Street</p>
          <Link to="/menu">
            <button>ORDER NOW </button>
          </Link>
        </div>
      </div>

       
    
       <h1 style={ { color:'black', height:'60px', justifyContent:"center", textAlign:"center", marginTop:'25px'  } }> Menu List's </h1>
       
   
    <Menu />

     

    </div>
   
  );
};

export default Home;