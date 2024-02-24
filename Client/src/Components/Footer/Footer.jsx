import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-center mt-12 mt-5">
        <p className="hover:text-sky-500">
          Diseñado & Desarrollo por Jeisson Osorio
        </p>
        <div className="my-2 flex justify-center">
          <a href="" className="hover:text-sky-500 px-2">
            <FaInstagram />
          </a>

          <a href="" className="hover:text-sky-500 px-2">
            <FaLinkedin />
          </a>
          <a href="" className="hover:text-sky-500 px-2">
            <FaGithub />
          </a>
        </div>
      </footer>
      <h5>HAPPIER</h5>
    </div>
  );
};

export default Footer;
