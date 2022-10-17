import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Redux/Actions/userActions";


const User = (props) => {
  const { user } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          
          <div className="info-wrap">
          <div className="card card-user shadow-sm">
                   
                   <div className="card-body">
                     <h5 className="card-title mt-5">{user.name}</h5>
                     <div className="card-text text-muted">
                       {user.isAdmin === true ? (
                         <p className="m-0">Admin</p>
                       ) : (
                         <p className="m-0">Customer</p>
                       )}

                       <p>
                         <a href={`mailto:${user.email}`}>{user.email}</a>
                       </p>
                     </div>
                   </div>
                 </div>
           
            <div className="row">
             
              <Link
                to="#"
                onClick={() => deletehandler(user._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-12"
              >
                {/* <i className="fas fa-trash-alt"></i> */}
                <p>Delete</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;