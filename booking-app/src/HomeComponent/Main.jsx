import React , {useContext}from "react";
import MyContext from "../Components/context";
import { NavLink } from "react-router-dom";
import Booking from "./Booking";

import Footer from "../Components/Footer";
export default function Main() {

  const pic= useContext(MyContext)



  return (
    <div>
      <img src={pic.beach} style={{ height: "60rem" }} alt="resort" />
      <div className="resort">
        <h1> The Sahara Hotel & Resort</h1>
        <p>Make your life Better and Bright! You must trip with Us!</p>

        <NavLink to="/room">
          <button className="room">
            Book a Room
          </button>
        </NavLink>

        <Booking  />

   





        <div className="AboutUs-sec">
          <h4>About Us</h4>
          <h2>A Best Place to Enjoy</h2>
          <p >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            adipisci tempora officiis totam, asperiores magni amet doloremque!
            Saepe, excepturi sapiente!
          </p>
        
        </div>
        <NavLink to="aboutus">
          <button className="us">More About Us</button>
        </NavLink>

       
      </div>
<img src={pic.maldives} alt="" className="maldives" style={{height: '60rem'}} />
      <div className="discover">
        <h4>Popular destination</h4>
        <h2>Choose your country</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators.
        </p>

        <NavLink to="/destination">
          <button>Discover More</button>
        </NavLink>
      </div>

      <div className="img">
        <img
          className="london"
          style={{ height: "300px" }}
          src={pic.london}
          alt="london"
        />
        <img
          className="france"
          style={{ height: "300px" }}
          src={pic.france}
          alt="france"
        />
        <img
          className="canada"
          style={{ height: "300px" }}
          src={pic.canada}
          alt="canada"
        />
        <img
          className="egypt"
          style={{ height: "300px" }}
          src={pic.egypt}
          alt="egypt"
        />
      </div>
      <Footer />
    </div>
  );
}
