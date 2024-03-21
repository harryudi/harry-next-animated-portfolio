"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "NEXT.JS Google Meet Clone",
    desc: "Designed an app using Next.js to clone the features of google-meet, using experience in sockets",
    img: "/gm.png",
    link: "https://github.com/harryudi/google-meet-clone",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React.js WWTBAM Game App",
    desc: "Technologies Used React: A popular JavaScript library for building user interfaces. JavaScript: To handle game logic and interactions.",
    img: "/wwtbam.png",
    link: "https://github.com/harryudi/wwtbam-gameApp",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "MERN Workout App",
    desc: "React: The frontend is built using React, enabling the creation of a dynamic and responsive user interface.",
    img: "/wk.png",
    link: "https://github.com/harryudi/WorkoutApp",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Movie Streaming App",
    desc: "Movie Site This is a simple movie site project built using HTML, CSS, and JavaScript.",
    img: "/ma.png",
    link: "https://github.com/harryudi/classic-movie-website",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "MERN Tourist App",
    desc: " Users can drop pins on the map to mark their favorite travel locations and share with friends or other users.",
    img: "/ta.png",
    link: "https://github.com/harryudi/TouristApp",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Few of My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl p-5 font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[220px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 mt-10 items-center justify-center text-center">
        <h1 className="text-8xl">Wanna talk ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end / MERN Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
