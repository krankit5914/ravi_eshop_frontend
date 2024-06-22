import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import "../../styles/Layout.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="main-content">
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "MERN stack project for your online shopping needs.",
  keywords: "MERN, React, Node, MongoDB, Ecommerce",
  author: "Ankit Kumar Suman",
};

export default Layout;
