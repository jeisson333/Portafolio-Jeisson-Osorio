import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "../Selects/Selects.jsx";
import Footer from "../Footer/Footer.jsx";

const Body = () => {
  return (
    <div className="bg-sky-50 text-stone-900 dark:bg-primary dark:text-cyan-50 font-mono">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Body;
