import React from 'react';
import "./Home.css";
import pic from "../assets/pngwing.com.png"
import reactlogo from "../assets/react.png";
import node from "../assets/node.png";
import net from "../assets/net.png";
import python from "../assets/python.png";


function Home() {
  return (
    <div className='homepage' id='home'>
      <div class="block small" data-aos="zoom-in-up" data-aos-duration="1500" >
        

        <div className='name' >
          <p>Hello I'm</p>
          <h1>Sathish</h1>
        </div>
        
        <div className='profession'>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className="block large" data-aos="zoom-in-left" data-aos-duration="1900">

        <div className="profile-image">
          <img src={pic} alt="Your Image" />
        </div>


      </div>
      <div class="block small"  data-aos="zoom-in-right" data-aos-duration="1500" >

        <div class="small-image-container node">
          <img src={node} alt="Small Image 2" />
        </div>
        <div class="small-image-container react">
          <img src={reactlogo} alt="Small Image 2" />
        </div>
        <div class="small-image-container net">
          <img src={net} alt="Small Image 2" />
        </div>
        <div class="small-image-container python">
          <img src={python} alt="Small Image 2" />
        </div>

      </div>
    </div>
  )
}

export default Home