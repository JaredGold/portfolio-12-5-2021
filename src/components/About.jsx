import React from "react";
import { DiRuby } from "react-icons/di";
import { SiRails, SiJavascript, SiReact , SiPostgresql, SiTailwindcss, SiHtml5, SiCss3, SiNodeDotJs } from "react-icons/si";
import ReactTooltip from "react-tooltip";

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex justify-center items-center flex-col flex-wrap"
      id="about"
    >
      <ReactTooltip />
      <div className="flex justify-center gap-8 flex-wrap mt-8">
        <img
          src="https://picsum.photos/300/400"
          alt="random"
          className="rounded-lg shadow-2xl md:mb-0 mb-4 md:w-auto w-3/5"
        />

        <div className="md:w-2/5 w-4/5 h-full border bg-white p-4 shadow-lg min-h-full">
          <h1 className="text-center text-2xl font-semibold">About Me</h1>

          <p className="mt-8">
            Hi, my name is Jared Goldstein and I am a programmer with a creative
            mind. I started studying at Coder Academy in Sydney since October
            2020 but I have also taken self-guided developer courses online
            prior to that.
          </p>
          <p className="mt-4">
            Take a look at my projects to see what I have achieved so far! I
            take great pride in what I do and I work hard in a team and
            independently as I have effective communication skills. I love
            learning and creating so programming has been a perfect fit for me.
            Simply put- my creations are functional and my codes are clean.
          </p>
        </div>
      </div>

      <div className="md:w-2/5 w-4/5 h-full border bg-white p-4 shadow-lg min-h-full mt-16 mb-8">
        <h4 className="text-center mb-4 font-semibold text-lg">
          Technologies Known
        </h4>
        <ul className="flex flex-row justify-center flex-wrap md:gap-x-8 md:gap-y-2 p-2 text-2xl">
          <li data-tip="Ruby" className="text-red-600"><DiRuby /></li>
          <li data-tip="Ruby on Rails" className="text-3xl text-red-700"><SiRails /></li>
          <li data-tip="JavaScript" className="text-yellow-600"><SiJavascript /></li>
          <li data-tip="React.js" className="text-blue-600"><SiReact /></li>
          <li data-tip="PostgreSQL" className="text-blue-800"><SiPostgresql /></li>
          <li data-tip="Tailwind CSS" className="text-blue-400"><SiTailwindcss /></li>
          <li data-tip="Node.js" className="text-green-600"><SiNodeDotJs /></li>
          <li data-tip="HTML 5" className="text-red-400"><SiHtml5 /></li>
          <li data-tip="CSS 3" className="text-blue-400"><SiCss3 /></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
