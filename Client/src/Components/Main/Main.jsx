import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCaretRight,
  FaRegEye,
} from "react-icons/fa";
import { LiaCaretRightSolid } from "react-icons/lia";
import pCer03 from "./Cer03.png";
import fotoPrincipal from "./BRB_1510.jpg";

const jobSection = document.querySelector("#jobSection");
const articles = document.querySelectorAll("#jobSection article");

jobSection.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    articles.forEach((article) => {
      article.classList.add("hidden");
    });
    const element = document.getElementById(id);
    element.classList.remove("hidden");
  }
});

const jobLinks = document.querySelectorAll("#jobSection button");
const firstLink = document.querySelector("#link1");
jobLinks.forEach((link) => {
  link.addEventListener("click", () => {
    firstLink.classList.remove(
      "border-sky-500",
      "bg-white",
      "dark:bg-slate-700"
    );
  });
});
const Section = () => {
  return (
    <main>
      <section className="my-0 flex flex-col lg:flex-row lg:h-[850px]">
        <div className="p-10 lg:w-[80%] lg:h-[500px] lg:self-center">
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
            <a href="" className="pr-2 text-2xl hover:text-purple-500">
              {" "}
              <FaInstagram />
            </a>
            <a href="" className="pr-2 text-2xl hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="" className="pr-2 text-2xl hover:text-green-700">
              <FaGithub />
            </a>
          </div>
          <div>
            <button className="border-2 rounded border-sky-500 p-4 w-[250px] text-lg tracking-widest hover:bg-sky-500 hover:dark:text-slate-900 ease-out duration-300">
              Contrátame
            </button>
          </div>
        </div>
        <div className={`my-10 w-full flex`}>
          <img
            src={fotoPrincipal}
            alt="Foto Jeisson Osorio"
            className="w-[300px] h-[320px] m-auto bg-cover rounded-lg lg:w-[70%] lg:h-[70%] lg:bg-center lg:bg-no-repeat lg:bg-[length:617px_840px]"
          />
        </div>
      </section>
      <h2 className="text-3xl text-slate-700 dark:text-white font-bold -tracking-widest w-[85%] m-auto text-center pt-8">
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
            data-id="job1"
            className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 "
          >
            Ips Lavoro
          </button>
          <button
            type="button"
            data-id="job2"
            className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
          >
            Claro
          </button>
          <button
            type="button"
            data-id="job3"
            className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
          >
            Decameron
          </button>
          <button
            type="button"
            data-id="job4"
            className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500  focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
          >
            ADECCO
          </button>
        </div>

        <div className="my-5 lg:px-10 lg:my-0 lg:max-w-[800px]">
          <article id="job1">
            <h3>
              Desarrollador Full Stack{" "}
              <span className="text-sky-500 font-bold text-lg">
                @AlvaroSoft
              </span>
            </h3>
            <h4 className="text-sm pb-5">Mayo 2023 - Febrero 2024</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aliquam placeat ab mollitia tempore alias dolore nisi, tempora
                  ipsum, distinctio necessitatibus architecto quisquam adipisci
                  facere deleniti voluptatum ratione fuga aliquid!
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <FaCaretRight />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  qui exercitationem libero ipsum! Aut tempora dolor facilis
                  ipsam sint! Esse quae dolore excepturi impedit, animi facilis
                  atque rerum autem eum?
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  repudiandae earum tempore illo dolorum veniam reiciendis
                  impedit quis unde atque blanditiis, cupiditate cumque a. Sequi
                  fugiat tenetur excepturi amet recusandae.
                </p>
              </li>
            </ul>
          </article>
          <article id="job2" className="hidden">
            <h3>
              Analista de Soporte Junior
              <span className="text-sky-500 font-bold text-lg">
                @Global Hitss
              </span>
            </h3>
            <h4 className="text-sm pb-5">Noviembre 2019 - Mayo 2023</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aliquam placeat ab mollitia tempore alias dolore nisi, tempora
                  ipsum, distinctio necessitatibus architecto quisquam adipisci
                  facere deleniti voluptatum ratione fuga aliquid!
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <FaCaretRight />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  qui exercitationem libero ipsum! Aut tempora dolor facilis
                  ipsam sint! Esse quae dolore excepturi impedit, animi facilis
                  atque rerum autem eum?
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  repudiandae earum tempore illo dolorum veniam reiciendis
                  impedit quis unde atque blanditiis, cupiditate cumque a. Sequi
                  fugiat tenetur excepturi amet recusandae.
                </p>
              </li>
            </ul>
          </article>
          <article id="job3" className="hidden">
            <h3>
              Analista de Sistemas
              <span className="text-sky-500 font-bold text-lg">
                @Sonda Colombia
              </span>
            </h3>
            <h4 className="text-sm pb-5">Septiembre 2018 - Noviembre 2019</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aliquam placeat ab mollitia tempore alias dolore nisi, tempora
                  ipsum, distinctio necessitatibus architecto quisquam adipisci
                  facere deleniti voluptatum ratione fuga aliquid!
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <FaCaretRight />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  qui exercitationem libero ipsum! Aut tempora dolor facilis
                  ipsam sint! Esse quae dolore excepturi impedit, animi facilis
                  atque rerum autem eum?
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  repudiandae earum tempore illo dolorum veniam reiciendis
                  impedit quis unde atque blanditiis, cupiditate cumque a. Sequi
                  fugiat tenetur excepturi amet recusandae.
                </p>
              </li>
            </ul>
          </article>
          <article id="job4" className="hidden">
            <h3>
              Practicante Ingenirio de Sistemas
              <span className="text-sky-500 font-bold text-lg">@Adecco</span>
            </h3>
            <h4 className="text-sm pb-5">Febrero 2018 - Agosto 2018</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aliquam placeat ab mollitia tempore alias dolore nisi, tempora
                  ipsum, distinctio necessitatibus architecto quisquam adipisci
                  facere deleniti voluptatum ratione fuga aliquid!
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <FaCaretRight />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  qui exercitationem libero ipsum! Aut tempora dolor facilis
                  ipsam sint! Esse quae dolore excepturi impedit, animi facilis
                  atque rerum autem eum?
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-sky-500 font-black">
                  <LiaCaretRightSolid />
                </span>
                <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  repudiandae earum tempore illo dolorum veniam reiciendis
                  impedit quis unde atque blanditiis, cupiditate cumque a. Sequi
                  fugiat tenetur excepturi amet recusandae.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <h3 className="text-3xl text-slate-700 dark:text-white my-5 px-12 font-bold tracking-widest md:text-center">
        Mis Ultimos Proyectos
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
                <a href="" className="px-2 hover:text-green-700">
                  <FaGithub />
                </a>
                <a href="" className="px-2 hover:text-pink-700">
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
                <a href="" className="px-2 hover:text-green-700">
                  <FaGithub />
                </a>
                <a href="" className="px-2 hover:text-pink-700">
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
                <a href="" className="px-2 hover:text-green-700">
                  <FaGithub />
                </a>
                <a href="" className="px-2 hover:text-pink-700">
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
      <section className="flex flex-col w-[90%] m-auto">
        <form action="" className="w-[90%] md:max-w-[600px] m-auto">
          <div>
            <input
              placeholder="tucorreo@ejemplo.com"
              type="email"
              name="email"
              id="email"
              className="py-3 p-3 w-full rounded-lg focus:outline-none focus:ring focus:right-blue-400"
            />
          </div>
          <div className="py-3">
            <input
              placeholder="Tú Nombre"
              name="name"
              id="name"
              type="text"
              className="py-3 p-3 w-full rounded-lg focus:outline-none focus:ring focus:right-blue-400"
            />
          </div>
          <div>
            <textarea
              placeholder="Mensaje"
              name="msj"
              id="msj"
              rows="5"
              className="py-3 p-3 w-full rounded-lg focus:outline-none focus:ring focus:right-blue-400"
            ></textarea>
          </div>
          <div className="my-3">
            <button className="bg-sky-600 text-white p-3 w-full rounded-lg text-xl tracking-widest">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Section;
