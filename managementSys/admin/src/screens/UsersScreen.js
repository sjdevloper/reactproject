import React from "react";
import Footer from "./../components/Footer/Footer";
import Header from "./../components/Header";
import UserComponent from "../components/users/UserComponent";

const UsersScreen = () => {
  return (
    <>
   
      <main className="main-wrap">
        <Header />
        <UserComponent />
        <Footer/>
      </main>
    </>
  );
};

export default UsersScreen;
