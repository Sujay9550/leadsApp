import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
