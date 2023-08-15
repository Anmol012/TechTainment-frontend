import React from "react";
import { Card } from "reactstrap";
import BaseComponent from "../components/BaseComponent";
import ImageSlider from "../components/ImageSlider";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
function Home() {
  return (
    <BaseComponent>
      <div className="Home container" style={{ minHeight: "500px" }}>
        <Card
          className="p-3 m-3"
          style={{ backgroundColor: "rgb(255,245,255,0.9)" }}
        >
        <div >
        <h1> Welcome User..</h1>
        <ImageSlider />
       </div>
       

      </Card>
      
      </div>
      

    </BaseComponent>
  );
}

export default Home;
