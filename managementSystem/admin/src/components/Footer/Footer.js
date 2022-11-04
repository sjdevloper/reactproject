import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
  
          <div className="container ">
            <div className="row ">
              <div className=" white col-md-8 d-flex align-items-center ">
                <span>@2022 All Right Reserved.</span>
                {/* <Link to="">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-instagram"></i>
                </Link> */}
                <div className="  col-lg-7 justify-content-lg-end d-flex ">
                <Link to="">
                  <i className="fab fa-linkedin-in  white"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-youtube white"></i>
                </Link>
                <Link to="">
                  <i className="fab fa-pinterest-p white"></i>
                </Link>
                </div>
                
              </div>
              <div className=" white col-12 col-lg-4 justify-content-lg-end d-flex align-items-center">
              <span>Contact us</span>
             
            
              <span>Privacy Policies</span>
              <span>Help</span>
               
              </div>
            </div>
          </div>
        </div>
    
   
  );
};

export default Footer;
