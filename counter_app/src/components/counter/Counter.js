import React from "react";
import minus from "../../asserts/images/minus.png";
import plus from "../../asserts/images/plus.png";
import { useDispatch, useSelector } from "react-redux";
import { COUNTER_KEY } from "../../redux/counterRedux/counter.reducer";
import {
  increaseCounter,
  decreaseCounter,
} from "../../redux/counterRedux/counter.actions";

const Counter = () => {
  let disPatch = useDispatch();

  let increaseBtn = () => {
    disPatch(increaseCounter());
  };

  let decreaseBtn = () => {
    disPatch(decreaseCounter());
  };

  let viewCounter = useSelector((state) => {
    return state[COUNTER_KEY];
  });

  return (
    <React.Fragment>
      <div className="row ">
        <div className="col-md-3"> </div>
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="text-center header-color">
              <h2 className="font-weight-bold"> COUNTER APP</h2>
            </div>
            <div className="card-body d-flex justfy-content-center ">
              <div className="mx-5 mt-3">
                <img
                  src={minus}
                  alt="minus"
                  width="80"
                  height="80"
                  className="clickEffect"
                  onClick={decreaseBtn}
                />
              </div>
              <div className="box mx-5 text-center">
                <span>{viewCounter.count}</span>
              </div>
              <div className="mx-5 mt-3">
                <img
                  src={plus}
                  alt="plus"
                  width="80"
                  height="80"
                  className="clickEffect"
                  onClick={increaseBtn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
