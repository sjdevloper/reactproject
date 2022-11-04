import React from "react";
import Footer from "./../components/Footer/Footer";
import Header from "./../components/Header";
import EditProductMain from "./../components/products/EditproductMain";

const ProductEditScreen = ({ match }) => {
  const productId = match.params.id;
  return (
    <>

      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
        <Footer/>
      </main>
    </>
  );
};
export default ProductEditScreen;
