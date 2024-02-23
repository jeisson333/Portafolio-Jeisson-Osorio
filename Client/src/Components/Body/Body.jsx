import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";

const Body = () => {
  return (
    <div className="bg-sky-50 text-stone-900 dark:bg-primary dark:text-cyan-50 font-mono">
      <Navbar />
      <Section />
    </div>
  );
};

export default Body;
