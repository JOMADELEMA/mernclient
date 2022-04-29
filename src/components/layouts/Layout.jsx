import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  //entre llaves y children sirve para obtener lo que etá encerrando el componente
  return (
    <>
      <Navigation />

      {/* se llama a lo que contiene los children */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
