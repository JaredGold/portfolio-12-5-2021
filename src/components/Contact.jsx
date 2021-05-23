import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-400 w-100% flex flex-col justify-center items-center"
      id="contact"
    >
      <h1 className="text-4xl">Contact</h1>
      <p>THIS IS SOME FILLER TEXT COME AND CHAT</p>

      <a
        href="mailto: jegoldstein94@gmail.com"
        className="flex border border-white px-2 py-2 bg-purple-200 hover:bg-purple-400 transition duration-100 cursor-pointer"
      >
        <p className="pr-2">Email</p>
        <SiMinutemailer className="text-xl" />
      </a>
    </div>
  );
};

export default Contact;
