import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";

import {
  createProductReview,
  listProductDetails,
} from "../../Redux/Actions/ProductActions";

import Message from "../LoadingError/Error";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/cartActions";


const ShopSection = (props) => {
  const { keyword, pagenumber } = props;

  const [qty, setQty] = useState(1);

 

  // const productId = match.params.id;

  const dispatch = useDispatch();

 
  const productDetails = useSelector((state) => state.productDetails);
  // const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);

  // const productDetails = useSelector((state) => state.productDetails);
  // const { loadding, error, product } = productDetails;
  const AddToCartHandle = (e) => {
    e.preventDefault();
    dispatch(addToCart(e.target.value,1))
  };

  const productList = useSelector((state) => state.productList);
  var { loading, error, products, page, pages } = productList;

  var onQuantityIncrement = (e, prod) => {
    e.preventDefault();
    prod.qty = prod.qty + 1
    var zx = 0 
    // setQty(qty + 1);
    // props.onQuantityInc(qty + 1);
  };

 var onQuantityDecrement = (e, prod) => {
    e.preventDefault();
    var zx = 0
    prod.qty = prod.qyt - 1

    if(prod.qty<=0)
      prod.qty = 1
    // if (qty <= 1) return;
    // setQty(qty - 1);
    // props.onQuantityDec(qty - 1);
  };

  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row ">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-3 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <h3>${product.price}</h3>
                            
                            {/* <div className="d-flex  ">
                            
                            <button
                              onClick={e => onQuantityDecrement(e, product)}
                              className="qa3"
                              value  =  {product._id}
                            >
                              -
                            </button>
                          
                            <input  className="qa2"  value={product.qty}  />

                            <button
                              onClick={e => onQuantityIncrement(e, product)}
                              className="qa3"
                              value  =  {product._id}
                            >
                              +
                            </button>
                            </div> */}
                           



                            <button
                              onClick={AddToCartHandle}
                              className="round-blue-btn"
                              value  =  {product._id}
                            >
                             
                              Add To Cart
                            </button>
                            
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                <div>
                   <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
          </div>

              
                 {/* <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ShopSection;
