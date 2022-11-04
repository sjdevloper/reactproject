import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer/Footer"
import MainProducts from "./../components/products/MainProducts";

const ProductScreen = () => {
  return (
    <>

      <main className="main-wrap">
        <Header />
        <MainProducts />
        <Footer/>
      </main>
    </>
  );
};

export default ProductScreen;
