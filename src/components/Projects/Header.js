import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import ManriqueCV from "../../assets/document/Manrique_CV.pdf";
import projectSVG from "../../assets/img/projects.svg";

const Header = () => {
  return (
    <>
      <section class="bg-gray-800">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-0 py-16 grid-cols-1 lg:grid-cols-12 items-center justify-center">
          <div class="place-self-center lg:col-span-7 text-center lg:text-right">
            <h1 class="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to the <br /> Tech Side
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A collection of projects that I have worked on that helped me
              bolster my skills and creativity.
            </p>
          </div>
          <div class="mt-8 lg:mt-0 lg:col-span-5 flex items-center justify-center">
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
