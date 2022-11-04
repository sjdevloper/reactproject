import React, { useEffect, useState } from "react";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";


import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {

  listProductDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import { addToCart } from "./../Redux/Actions/cartActions";

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  var onQuantityIncrement = (prod) => {
    prod.qty = prod.qty + 1
    var zx = 0 
    // setQty(qty + 1);
    // props.onQuantityInc(qty + 1);
  };

 var onQuantityDecrement = (prod) => {
    var zx = 0
    prod.qty = prod.qyt - 1

    if(prod.qty<=0)
      prod.qty = 1
    // if (qty <= 1) return;
    // setQty(qty - 1);
    // props.onQuantityDec(qty - 1);
  };

  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <h2>Products Detail</h2>
            <div className="row margin">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="col-lg-8 ">
                    <div className="flex-box d-flex  align-items-center">
                      <span className="big">${product.price}</span>
                      {product.countInStock > 0 ? (
                        <span className="pink">In Stock</span>
                      ) : (
                        <span className="pink">out of stock</span>
                      )}
                    </div>

                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex align-items-center">
                          <h6 className="qa">Quantity</h6>

                          {/* <button
                              onClick={() => onQuantityDecrement(product)}
                              className="qa3 btn-info btn"
                              value  =  {product.qty}
                            >
                              -
                            </button>
                          
                        

                            <button
                              onClick={() => onQuantityIncrement(product)}
                              className="qa3"
                              value  =  {product.qty}
                            >
                              +
                            </button>
                             */}

                            

                          <select
                            className="qa mb-2"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>

                        </div>
                        <button
                          onClick={AddToCartHandle}
                          className="round-blue-btn"
                        >
                          Add To Cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
