import React, { useEffect } from "react";

import "../Resume/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const withAOS = (Component) => (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Component {...props} />;
};
const PositionTitle = ({ title, company, experience, stacks }) => {
  return (
    <main>
      <header
        className="mt-2 text-3xl font-bold dark:text-white"
        style={{ color: "#3b3b3b" }}
      >
        {title}
      </header>
      <div className="mb-1 text-xl font-bold leading-none text-sky-500 dark:text-gray-500">
        {experience}
      </div>
      <div className=" text-2xl italic">{company}</div>
      <div className="text-xl italic">{stacks}</div>
    </main>
  );
};
const Resume = ({
  title,
  company,
  experience,
  description,
  stacks,
}) => {
  return (
    <>
      <ol
        class="relative border-s border-gray-200 dark:border-gray-700 "
        data-aos="fade-up"
      >
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time>
            <PositionTitle experience={experience} />
          </time>
          <header>
            <PositionTitle title={title} company={company} />
          </header>

          <ul className="text-regular list-disc leading-8 justify m-3">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <span className="text-2xl font-bold">Tool Stacks:</span>
          <PositionTitle stacks={stacks} />
        </li>
      </ol>
    </>
  );
};

export default withAOS(Resume);
