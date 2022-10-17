import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer/Footer";
import AddProductMain from "./../components/products/AddProductMain";

const AddProduct = () => {
  return (
    <>
   
      <main className="main-wrap">
        <Header />
        <AddProductMain />
        <Footer/>
      </main>
    </>
  );
};

export default AddProduct;
