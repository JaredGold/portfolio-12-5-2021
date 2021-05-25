/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { SiMinutemailer, SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-400 w-100% flex flex-col justify-center items-center"
      id="contact"
    >
      <h1 className="text-4xl mb-12 font-bold">Let's Talk!</h1>
      <p className="mb-8 text-center">If you would like to get in touch with me please reach out to me.</p>
      <div className="flex space-x-2">
        <a
          href="mailto: jegoldstein94@gmail.com"
          className="flex border border-white px-2 py-2 bg-purple-200 hover:bg-purple-400 transition duration-100 cursor-pointer"
        >
          <p className="pr-2">Email</p>
          <SiMinutemailer className="text-xl" />
        </a>

        <a
          href="https://github.com/JaredGold"
          target="_blank"
          className="flex border border-white px-2 py-2 bg-purple-200 hover:bg-purple-400 transition duration-100 cursor-pointer"
        >
          <p className="pr-2">GitHub</p>
          <SiGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/jared-goldstein/"
          target="_blank"
          className="flex border border-white px-2 py-2 bg-purple-200 hover:bg-purple-400 transition duration-100 cursor-pointer"
        >
          <p className="pr-2">LinkedIn</p>
          <SiLinkedin className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
