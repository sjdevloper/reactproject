import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

import { Link } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import swal from "sweetalert";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,

    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    swal({
      icon: "success",
      title:
        "We have sent the update password link to your email, please check that!",
      button: "close",
    });

  return (
    <>
      <Header />

      <div className="d-flex  flex-column justify-content-center align-items-center pw">
        <form
          className="Login col-md-8 col-lg-5 sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-white w-auto ma-5 h-96 mt-20 rounded-lg">
            <div className="flex justify-center items-center h-20">
              <h2 className="uppercase text-4xl font-bold">
                Update your Password
              </h2>

              <a>Enter your email link, we will send you the recovery link</a>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-lg"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        "^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$",
                      message: "Please enter a valid email.",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <span className="text-sm text-red">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="submit"
                  value="Update password"
                  className="h-10 w-full rounded-lg btn-primary text-white"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

  
      <Footer />
    </>
  );
};

export default ForgotPassword;
