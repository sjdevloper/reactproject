import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="main-header navbar">
      <div className="col-6 d-flex align-items-center">
      <Link className="navbar-brand text-white" to="/" >
        <h2>Management</h2>
      </Link>
      <p className = "text-white chuwa">CHUWA</p>
      </div>

      
      <div className="col-search col-sm-4  mx-sm-8   ">
        <form className="searchform">
          <div className="input-group">
            <input
              list="search_terms"
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <button className="btn btn-light bg" type="button">
              <i className="far fa-search"></i>
            </button>
          </div>
         
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          <li>
          
            <div>
            
              <Link
                onClick={logoutHandler}
                className="dropdown-item text-danger"
                to="#"
              >
                Sign Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;