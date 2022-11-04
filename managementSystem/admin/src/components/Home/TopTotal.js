import React from "react";
import { Link, NavLink } from "react-router-dom";

const TopTotal = (props) => {
  const { orders, products } = props;
  let totalSale = 0;
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
        <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
            <i className="icon fas fa-user"></i>
            </span>
            <NavLink
                activeClassName="active"
                className="menu-link"
                to="/users"
              >
                
                <span className="text">Users</span>
              </NavLink>
          </article>
        
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
        <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-primary">
            <i className="icon fas fa-shopping-bag"></i>
            </span>
            <NavLink
                activeClassName="active"
                className="menu-link"
                to="/products"
              >
                
                <span className="text">Products</span>
              </NavLink>
          </article>
          
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
        <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-success">
            <i className="icon fas fa-cart-plus"></i>
            </span>
            <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addproduct"
              >
                
                <span className="text">Add product</span>
              </NavLink>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
