import "./header.css";

import projectSVG from "../../assets/img/projects.svg";

const Header = () => {
  return (
    <>
      <section class="bg-gray-800">
        <div class="flex flex-col lg:flex-row max-w-screen-xl px-4 mx-auto py-16 items-center justify-center animate-fade-up animate-delay-0">
          <div class="mb-24 lg:mb-0 lg:mr-24 text-center lg:text-right">
            <h1 class="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-wider leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to the <br /> Tech Side
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A collection of my projects and tools that I have worked with and that helped me
              bolster my technical skills and creativity.
            </p>
          </div>
          <div class="mt-8 lg:mt-0 flex items-center justify-center">
            <img
              src={projectSVG}
              alt="Projects SVG"
              className="w-72 object-contain mx-auto md:mx-0 bg-white rounded-full shadow-lg dark:bg-gray-800"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
