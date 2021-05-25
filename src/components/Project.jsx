import React, { useState } from "react";
import Modal from "react-modal";

const Project = (props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    active ? setActive(false) : setActive(true);
  };

  Modal.setAppElement("#root");

  return (
    <div
      onClick={toggleActive}
      className="bg-white self-start rounded-md flex md:w-96 flex-col p-4 shadow-2xl cursor-pointer border border-black border-opacity-25 overscroll-x-none"
    >
      <Modal
        isOpen={active}
        onRequestClose={() => setActive(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            width: "90vw",
            height: "75%",
          },
        }}
      >
        <img
          src={props.imageSource}
          alt={props.alt}
          className="rounded-t-md self-center select-none max-w-screen-md"
        />
        <h2 className="text-2xl text-center font-medium pt-2 select-none">
          {props.title}
        </h2>
        <p className="text-center">{props.description}</p>
        <h3 className="text-xl text-center font-medium pt-3 select-none">
          Framework{props.frameworks.length > 1 ? "s" : null} Used
        </h3>
        <ul className="text-center select-none">
          {props.frameworks.map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
        <a
          href={props.linkToWork}
          className="text-center w-max self-center mt-4 text-sm text-purple-600 hover:text-purple-400"
        >
          Link To Project
        </a>
      </Modal>
      <img
        src={props.imageSource}
        alt={props.alt}
        className="rounded-t-md self-center"
      />
      <h2 className="text-2xl text-center font-medium pt-2">{props.title}</h2>
    </div>
  );
};

export default Project;
