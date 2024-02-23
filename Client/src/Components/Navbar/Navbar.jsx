import React, { useEffect, useRef, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const menuButtonRef = useRef(null);
  const menuItemsRef = useRef(null);
  const menuButtonSpansRef = useRef([]);

  useEffect(() => {
    const handleMenuButtonClick = () => {
      menuItemsRef.current.classList.toggle("hidden");

      menuButtonSpansRef.current.forEach((span) => {
        span.classList.toggle("animado");
      });
    };

    menuButtonRef.current.addEventListener("click", handleMenuButtonClick);

    return () => {
      menuButtonRef.current.removeEventListener("click", handleMenuButtonClick);
    };
  }, []);

  const handleLinkClick = () => {
    menuItemsRef.current.classList.add("hidden");
    menuButtonSpansRef.current.forEach((span) => {
      span.classList.remove("animado");
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const menuItems = menuItemsRef.current;
      if (menuItems) {
        const w = window.outerWidth;
        if (w > 768) {
          menuItems.classList.add("hidden");
          menuButtonSpansRef.current.forEach((span) => {
            span.classList.remove("animado");
          });
        }
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header>
      <nav className="flex justify-between py-10 m-auto px-10 text-lg font-medium tracking-widest md:items-center relative">
        <a href="">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/865/530/non_2x/backend-development-line-gradient-circle-background-icon-vector.jpg"
            alt=""
            width={30}
          />
        </a>
        <div
          ref={menuItemsRef}
          className="bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] md:flex flex-col items-start justify-around rounded-lg text-dark dark:text-white md:flex-row md:w-full md:py-0 md:h-[50px] md:bg-inherit md:dark:bg-primary hidden"
        >
          <ul className="flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full">
            <li className="md:px-5 hover:text-sky-600">
              <a href="" onClick={handleLinkClick}>
                Quien Soy
              </a>
            </li>
            <li className="md:px-5 hover:text-sky-600">
              <a href="" onClick={handleLinkClick}>
                Experiencia
              </a>
            </li>
            <li className="md:px-5 hover:text-sky-600">
              <a href="" onClick={handleLinkClick}>
                Proyectos
              </a>
            </li>
            <li className="md:px-5 hover:text-sky-600">
              <a href="" onClick={handleLinkClick}>
                Contactame
              </a>
            </li>
          </ul>

          <button
            id="darkButton"
            className="text-sky-600 text-2xl"
            onClick={handleChangeTheme}
          >
            <MdDarkMode />
          </button>
        </div>
        <button
          ref={menuButtonRef}
          className="absolute top-10 right-12 md:hidden"
        >
          <span
            ref={(span) => menuButtonSpansRef.current.push(span)}
            className="br-1 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]"
          ></span>
          <span
            ref={(span) => menuButtonSpansRef.current.push(span)}
            className="br-2 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]"
          ></span>
          <span
            ref={(span) => menuButtonSpansRef.current.push(span)}
            className="br-3 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]"
          ></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
