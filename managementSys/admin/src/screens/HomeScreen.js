import React from "react";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import Footer from "./../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
  
      <main className="main-wrap">
        <Header />
        <Main />
        <Footer/>
      </main>
    </>
  );
};

export default HomeScreen;
