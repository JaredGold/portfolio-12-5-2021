import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex justify-center items-center flex-col flex-wrap"
      id="about"
    >
      <div className="flex justify-center gap-8 flex-wrap mt-8">
          <img src="https://picsum.photos/400/600" alt="random" className="rounded-lg shadow-2xl md:w-auto w-3/5"/>

        <div className="md:w-2/5 w-4/5 h-full border bg-white p-4 shadow-md min-h-full">
            <h1 className="text-center text-2xl">About Me</h1>
          
            <p className="mt-8">{loremIpsum}</p>
        </div>
      </div>

      <div className="border-2 border-black mt-8 mb-8 w-1/2">
        <h4 className="text-center mb-4">Languages Known</h4>
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
