import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 w-full flex justify-center content-center items-center flex-col"
      id="about"
    >
      <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-1 justify-items-center place-content-center">
        <div className="border-2 border-black row-span-3 ">
          <img src="https://picsum.photos/400/600" alt="random" />
        </div>
        <div className="border-2 border-black col-span-2 w-full flex justify-center items-center">
          <h1>About Me</h1>
        </div>
        <div className="border-2 border-black col-span-2">
          <p>{loremIpsum}</p>
        </div>
      </div>
      <div className="border-2 border-black mt-8 w-1/2">
        <h4 className="text-center mb-4" >Languages Found</h4>
        <ul className="flex flex-row justify-evenly">
          <li>lang1</li>
          <li>lang1</li>
          <li>lang1</li>
          <li>lang1</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

const loremIpsum =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus iure id nemo dolores excepturi delectus! Earum a beatae nihil iusto soluta nulla vel ipsum. Magni consequatur facilis maiores necessitatibus? Modi voluptatibus eum, quam esse deserunt similique sunt expedita sed rerum quidem officiis aliquam, adipisci odio voluptatum? Incidunt optio hic porro quaerat, beatae consectetur voluptatum vero quas, perferendis sunt ab! Sunt quo, aspernatur tempora accusamus maiores perferendis corporis labore saepe facilis maxime ex laboriosam possimus deleniti earum consequatur officiis fugit incidunt architecto ipsam magni? Expedita ab doloremque dolorum assumenda saepe. Voluptatum fugit dicta molestias quibusdam ratione quo rem voluptate, esse ad maxime accusantium, vero maiores unde voluptas debitis eos perspiciatis consequatur consectetur sint ex iure nam minima accusamus officia. Ratione. Laboriosam error reiciendis blanditiis explicabo voluptas sed doloribus, nesciunt deleniti ipsum molestias vel earum veritatis, recusandae autem aspernatur iste? Animi, quas? Labore qui perferendis excepturi laudantium fugit consectetur earum quasi.";
