import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";
import "./Header.css";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <h2>Management</h2>
                  </Link>
                  <p>CHUWA</p>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div>
                        <Link className="dropdown-item" to="/login">
                          Sign in
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-4 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <h2 className="white">Management</h2>
                </Link>
                <span className="white2">CHUWA</span>
              </div>
              <div className="col-md-5 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search ..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />

                  <button type="submit" className="search-button">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register white">
                {userInfo ? (
                  <div>
                    <div>
                      <Link
                        className="white"
                        to="#"
                        onClick={logoutHandler}
                        to="/login"
                      >
                        Sign Out
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* <Link to="/register">Register</Link> */}
                    <Link className="white" onClick={logoutHandler} to="/login">
                      Sign In
                    </Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag  white"></i>
                  {/* <span className="badge">{cartItems.length}</span> */}
                  <span className=" badge  total-price">${total}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
