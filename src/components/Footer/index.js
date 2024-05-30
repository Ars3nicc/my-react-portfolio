import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS library
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
const withAOS = (Component) => (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Component {...props} />;
};

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <div class="self-center flex flex-col">
              <span class=" text-2xl font-semibold whitespace-nowrap dark:text-white">
                Franz Manrique
              </span>
              <p>
                IT Professional | Specializing in Software Development, IT
                Solutions Consultant
              </p>
              <p className="py-4">
                franzmanrique2121@gmail.com
                <br />
                (+63) 916 630 2417
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect with Me!
              </h2>
              <div className="mt-4 flex justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
                >
                  <LinkedInIcon style={{ fontSize: 40 }} />
                </a>
                <a
                  href="https://github.com/Ars3nicc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
                >
                  <GitHubIcon style={{ fontSize: 40 }} />
                </a>
                <a
                  href="https://www.canva.com/design/DAFtSkW0F5c/1JwldvS4uv9Qikbt2A8oJg/edit?utm_content=DAFtSkW0F5c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
                >
                  <DescriptionIcon style={{ fontSize: 40 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              FR Manrique Digital Portfolio
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default withAOS(Footer);
