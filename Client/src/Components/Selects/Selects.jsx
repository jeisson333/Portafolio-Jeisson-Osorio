import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCaretRight,
  FaRegEye,
} from "react-icons/fa";
import { LiaCaretRightSolid } from "react-icons/lia";
import pCer03 from "./Cer03.png";
import fotoPrincipal from "./image.png";

const scrollToContact = () => {
  const contactSection = document.getElementById("contactoSection");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Section = () => {
  const [selectedJob, setSelectedJob] = useState("job1");

  useEffect(() => {
    const jobSection = document.querySelector("#jobSection");
    const articles = document.querySelectorAll("#jobSection article");

    const handleArticleClick = (e) => {
      const id = e.target.dataset.id;
      if (id) {
        articles.forEach((article) => {
          article.classList.add("hidden");
        });
        const element = document.getElementById(id);
        element.classList.remove("hidden");
      }
    };

    jobSection.addEventListener("click", handleArticleClick);

    return () => {
      jobSection.removeEventListener("click", handleArticleClick);
    };
  }, []);

  const handleJobClick = (id) => {
    setSelectedJob(id);
  };

  return (
    <main>
      <section
        className="my-0 flex flex-col lg:flex-row lg:h-[850px]"
        id="quienSoySection"
      >
        <div className="p-10 lg:w-[80%] lg:h-[800px] lg:self-center">
          <h1 className="text-sky-600 dark:text-sky-300 text-2xl font-bold tracking-widest leading-10">
            Hola, Soy
          </h1>
          <p className="py-2 text-3xl font-bold text-slate-600 dark:text-slate-300">
            Jeisson Osorio
          </p>
          <p className="text-3xl font-bold text-slate-500 dark:text-slate-600">
            Desarrollador de Aplicaciones WEB
          </p>
          <p className="mt-5 text-lg">
            Soy un desarrollador de aplicaciones web con experiencia en
            tecnologías modernas como JavaScript, React, Node.js y Express. Me
            especializo en la creación de soluciones innovadoras y eficientes
            para proyectos web, combinando mi pasión por el desarrollo frontend
            y backend. Comprometido con mantenerme actualizado, busco
            constantemente mejorar mis habilidades y contribuir al éxito de los
            equipos de desarrollo.
          </p>
          <div className="py-6 flex">
            <a
              href="https://www.instagram.com/"
              className="pr-2 text-2xl hover:text-purple-500"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="pr-2 text-2xl hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              className="pr-2 text-2xl hover:text-green-700"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <button
              onClick={scrollToContact}
              className="border-2 rounded border-sky-500 p-4 w-[250px] text-lg tracking-widest hover:bg-sky-500 hover:dark:text-slate-900 ease-out duration-300"
            >
              Contrátame
            </button>
          </div>
        </div>
        <div className={`my-10 w-full`}>
          {/*flex*/}
          <img
            src={fotoPrincipal}
            alt="Foto Jeisson Osorio"
            className="w-[300px] h-[320px] m-auto bg-cover rounded-lg lg:w-[70%] lg:h-[70%] lg:bg-center lg:bg-no-repeat lg:bg-[length:617px_840px]"
          />
        </div>
      </section>
      <h2
        id="experienciaSection"
        className="text-3xl text-slate-700 dark:text-white font-bold -tracking-widest w-[85%] m-auto text-center pt-8"
      >
        Experiencia Laboral
      </h2>
      <section
        className="my-12 flex flex-col w-[84%] m-auto lg:flex-row lg:w-[87%] lg:my-28"
        id="jobSection"
      >
        <div className="flex justify-between lg:flex-col lg:w-[20%]">
          <button
            type="button"
            id="link1"
            onClick={() => handleJobClick("job1")}
            className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${
              selectedJob === "job1" ? "bg-white" : ""
            }`}
          >
            Ips Lavoro
          </button>
          <button
            type="button"
            onClick={() => handleJobClick("job2")}
            className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left ${
              selectedJob === "job2" ? "bg-white" : ""
            }`}
          >
            Claro
          </button>
          <button
            type="button"
            onClick={() => handleJobClick("job3")}
            className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left ${
              selectedJob === "job3" ? "bg-white" : ""
            }`}
          >
            Decameron
          </button>
          <button
            type="button"
            onClick={() => handleJobClick("job4")}
            className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left ${
              selectedJob === "job4" ? "bg-white" : ""
            }`}
          >
            ADECCO
          </button>
        </div>

        <div className="my-5 lg:px-10 lg:my-0 lg:max-w-[800px]">
          <article id="job1" className={selectedJob === "job1" ? "" : "hidden"}>
            <h3>
              Desarrollador Full Stack{" "}
              <span className="text-sky-500 font-bold text-lg">
                @AlvaroSoft
              </span>
            </h3>
            <h4 className="text-sm pb-5">Mayo 2023 - Febrero 2024</h4>
            <ul>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Desarrollo y mantenimiento de aplicaciones web internas.
              </li>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Colaboración en la optimización de procesos.
              </li>
            </ul>
          </article>
          <article id="job2" className={selectedJob === "job2" ? "" : "hidden"}>
            <h3>
              Desarrollador Frontend{" "}
              <span className="text-sky-500 font-bold text-lg">@Claro</span>
            </h3>
            <h4 className="text-sm pb-5">Agosto 2022 - Mayo 2023</h4>
            <ul>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Diseño e implementación de interfaces de usuario.
              </li>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Integración con APIs RESTful para la obtención de datos.
              </li>
            </ul>
          </article>
          <article id="job3" className={selectedJob === "job3" ? "" : "hidden"}>
            <h3>
              Desarrollador Backend{" "}
              <span className="text-sky-500 font-bold text-lg">@Decameron</span>
            </h3>
            <h4 className="text-sm pb-5">Enero 2022 - Julio 2022</h4>
            <ul>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Implementación de lógica de negocio y servicios RESTful.
              </li>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Optimización de consultas a bases de datos.
              </li>
            </ul>
          </article>
          <article id="job4" className={selectedJob === "job4" ? "" : "hidden"}>
            <h3>
              Desarrollador Junior{" "}
              <span className="text-sky-500 font-bold text-lg">@ADECCO</span>
            </h3>
            <h4 className="text-sm pb-5">Julio 2021 - Diciembre 2021</h4>
            <ul>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Soporte en el desarrollo de aplicaciones web.
              </li>
              <li className="flex items-center py-2">
                <LiaCaretRightSolid className="text-slate-500 mr-2" />
                Pruebas de software y depuración de errores.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <h3
        id="proyectosSection"
        className="text-3xl text-slate-700 dark:text-white font-bold my-5 px-12 tracking-widest md:text-center"
      >
        Mis Últimos Proyectos
      </h3>
      <section className="my-12 flex flex-col items-center justify-center w-[90%] m-auto lg:flex-row">
        <div className="border-1 rounded-lg bg-white dark:bg-slate-800 m-5 ">
          <div className="m-2">
            <img
              src={pCer03}
              alt="Cer03"
              className="opacity-80 hover:opacity-100"
            />
            <h4 className="font-bold my-2">CER03</h4>
            <p className="text-gray-600 mb-4">
              Cer03 es una plataforma digital que ayuda a pequeños y grandes
              negocios a vender y administrar sus productos de forma simple y
              eficiente.
            </p>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  ReactJs
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  Nodejs
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  PostgreSQL
                </span>
              </div>
              <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap">
                <a
                  href="https://cer03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 hover:text-green-700"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://cer03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 hover:text-pink-700"
                >
                  <FaRegEye />
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="border-1 rounded-lg bg-white dark:bg-slate-800 m-5 ">
          <div className="m-2">
            <img
              src={pCer03}
              alt="Cer03"
              className="opacity-80 hover:opacity-100"
            />
            <h4 className="font-bold my-2">CER03</h4>
            <p className="text-gray-600 mb-4">
              Cer03 es una plataforma digital que ayuda a pequeños y grandes
              negocios a vender y administrar sus productos de forma simple y
              eficiente.
            </p>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  ReactJs
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  Nodejs
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  PostgreSQL
                </span>
              </div>
              <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap">
                <a
                  href="https://cer03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 hover:text-green-700"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://cer03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 hover:text-pink-700"
                >
                  <FaRegEye />
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="border-1 rounded-lg bg-white dark:bg-slate-800 m-5 ">
          <div className="m-2">
            <img
              src={pCer03}
              alt="Cer03"
              className="opacity-80 hover:opacity-100"
            />
            <h4 className="font-bold my-2">CER03</h4>
            <p className="text-gray-600 mb-4">
              Cer03 es una plataforma digital que ayuda a pequeños y grandes
              negocios a vender y administrar sus productos de forma simple y
              eficiente.
            </p>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  ReactJs
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  Nodejs
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
                  PostgreSQL
                </span>
              </div>
              <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap">
                <a
                  href="https://cer03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 hover:text-green-700"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://cer03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 hover:text-pink-700"
                >
                  <FaRegEye />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <h3 className="text-3xl text-slate-700 dark:text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center">
        Contáctame
      </h3>
      <section id="contactoSection" className="flex flex-col w-[90%] m-auto">
        <form action="" className="w-[90%] md:max-w-[600px] m-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-sky-500"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-sky-500"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-sky-500 text-black"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 focus:outline-none focus:bg-sky-700"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
};

export default Section;
