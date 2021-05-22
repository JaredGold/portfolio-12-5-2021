import React, { useState } from "react";
import Modal from "react-modal";

const Project = (props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    active ? setActive(false) : setActive(true);
  };

  const modal = () => {
    return (
      <>
        <p className="text-center">{props.description}</p>
        <h3 className="text-xl text-center font-medium pt-3">
          Framework{props.frameworks.length > 1 ? "s" : null} Used
        </h3>
        <ul className="text-center">
          {props.frameworks.map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
        <a href={props.linkToWork} className="text-center pt-4 text-purple-600">
          Link To Project
        </a>
      </>
    );
  };

  Modal.setAppElement("#root");

  return (
    <div
      onClick={toggleActive}
      className="bg-white self-start rounded-md flex w-96 flex-col p-4 shadow-2xl cursor-pointer"
    >
      <Modal
        isOpen={active}
        onRequestClose={() => setActive(false)}
        style={{
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            display               : 'flex',
            flexDirection         : 'column',
            width                 : '90vw'
          }
        }}
      >
        <img src={props.imageSource} alt={props.alt}
          className="rounded-t-md self-center select-none" />
        <h2 className="text-2xl text-center font-medium pt-2 select-none">{props.title}</h2>
        <p className="text-center">{props.description}</p>
        <h3 className="text-xl text-center font-medium pt-3 select-none">
          Framework{props.frameworks.length > 1 ? "s" : null} Used
        </h3>
        <ul className="text-center select-none">
          {props.frameworks.map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
        <a href={props.linkToWork} className="text-center w-max self-center mt-4 text-sm text-purple-600 hover:text-purple-400">Link To Project</a>
        {/* <a href={props.linkToWork}><div className="border-2 hover:bg-purple-400 hover:border-purple-400 hover:text-white" >Link To Project</div></a> */}
      </Modal>
      <img
        src={props.imageSource}
        alt={props.alt}
        className="rounded-t-md self-center"
      />
      <h2 className="text-2xl text-center font-medium pt-2">{props.title}</h2>
      {active ? modal() : null}
    </div>
  );
};

export default Project;
