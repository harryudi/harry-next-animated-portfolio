"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/front-1.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            I'm an experienced MERN stack developer, transforming ideas into dynamic web experiences. From sculpting sleek back-end functionalities with Node.js and Express to crafting engaging user interfaces using React, I thrive on bringing digital concepts to life. My passion extends beyond the code, diving deep into database design with MongoDB to ensure data integrity and efficiency. With a keen eye for performance optimization and a penchant for staying ahead of technology trends, I'm not just a coder – I'm a creator, dedicated to delivering unique, user-focused solutions that leave a lasting impression.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Front-end Developer / Mern stack developer
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <svg width="322" height="146" viewBox="0 0 522 346" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.2718 1.82069C63.2718 13.1876 61.7144 23.7631 59.3217 34.9289C55.4251 53.1132 51.9391 71.3658 48.0951 89.5548C44.653 105.842 39.2861 121.721 34.7894 137.736C30.5417 152.863 26.2787 168.082 20.4443 182.694C15.613 194.794 9.3867 206.252 4.12409 218.141C2.91311 220.877 1.52533 222.451 1.52533 225.418" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M112.856 35.5006C105.759 82.1384 99.9724 129 86.0369 174.17C80.0947 193.432 68.8851 213.23 68.8851 233.838" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M2.46088 142.154C33.4588 142.154 66.2576 147.137 95.9122 135.605C99.5455 134.192 104.547 129.056 108.178 129.056" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M139.987 153.38C123.503 154.754 111.282 170.933 109.114 186.436C107.798 195.845 107.575 218.939 120.393 222.143C131.744 224.981 141.765 201.732 144.093 193.193C145.217 189.074 144.596 184.424 144.665 180.199C144.73 176.231 145.6 172.36 145.6 168.349C145.6 165.542 145.6 162.736 145.6 159.929C145.6 156.394 147.435 168.018 147.576 168.609C150.459 180.786 153.927 192.614 158.178 204.368C160.279 210.174 162.786 225.464 169.509 227.705C177.667 230.424 180.44 225.149 184.894 219.805" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M194.249 167.414C194.249 182.365 194.249 197.317 194.249 212.268C194.249 213.798 194.62 215.933 194.197 217.414C193.909 218.422 192.724 215.751 192.586 214.711C191.181 204.108 190.258 193.168 189.779 182.486C189.196 169.483 189.08 155.631 191.65 142.777C192.341 139.327 194.209 135.855 197.732 135.189C205.638 133.693 214.845 137.381 222.316 139.451C225.63 140.369 230.248 141.078 233.439 142.673C235.257 143.583 236.037 145.168 238.22 145.896" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M234.478 164.607C234.478 178.966 232.607 193.255 232.607 207.642C232.607 211.486 231.322 209.781 230.944 206.499C229.63 195.115 230.992 183.157 231.671 171.779C232.174 163.363 233.078 154.174 234.998 145.948C235.508 143.76 235.797 140.748 237.908 139.763C248.8 134.68 260.894 142.154 271.9 142.154" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M271.9 163.671C272.23 168.784 273.496 174.325 274.915 179.264C276.354 184.274 279.485 192.826 283.127 196.728C287.477 201.389 292.58 198.992 296.744 194.233C309.34 179.837 317.742 162.568 317.742 143.297C317.742 138.272 316.274 132.107 315.663 142.154C313.797 172.85 305.32 200.332 294.353 228.744C290.234 239.418 285.945 249.887 281.983 260.657C276.338 276.005 269.131 289.369 256.879 300.522C238.096 317.619 212.579 326.406 188.74 333.63C158.341 342.842 127.731 348.377 96.6399 338.412C81.4818 333.553 62.8327 322.434 54.54 308.162C46.1858 293.785 83.4338 279.571 89.6752 276.353C123.195 259.072 160.666 247.268 198.199 242.726C216.677 240.489 236.581 238.688 255.164 241.322C268.296 243.183 278.763 248.538 292.482 246.208C295.431 245.707 297.658 243.758 300.434 243.141C302.348 242.716 303.437 241.322 305.58 241.322C307.237 241.322 309.239 241.68 310.726 240.854C313.456 239.338 317.595 239.62 320.549 238.308C323.347 237.064 329.339 236.569 331.36 234.773C334.724 231.783 340.161 230.991 343.73 228.017C347.044 225.254 350.807 222.371 354.229 219.805" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M394.458 140.283C386.248 140.283 378.533 141.099 371.952 146.468C364.29 152.718 356.018 162.086 354.333 172.195C352.15 185.294 349.733 207.597 369.925 202.549C388.464 197.914 390.918 166.244 394.146 151.821C403.247 111.157 419.631 72.9077 430.32 32.6939C431.855 26.9227 433.104 22.1353 429.489 17.2054C426.689 13.3872 424.117 9.78791 422.004 5.56292C418.36 -1.7268 416.093 24.5276 415.975 25.2095C412.581 44.7915 409.351 64.3571 406.62 84.0454C404.565 98.8541 403.848 113.891 401.526 128.64C399.462 141.755 398.368 155.952 394.873 168.765C392.113 178.885 388.844 188.52 388.844 199.118C388.844 206.221 388.326 214.191 396.329 214.191C401.145 214.191 406.965 212.91 410.362 209.513" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M412.233 177.705C416.854 177.705 424.259 178.949 427.202 174.274C431.586 167.311 428.685 157.672 426.37 150.73C425.509 148.146 422.948 142.513 419.717 142.154C418.276 141.993 417.258 140.58 415.923 141.998C409.943 148.352 406.251 159.224 403.449 167.206C398.555 181.148 399.938 195.564 410.154 206.915C415.859 213.253 426.104 213.418 431.88 207.642" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M439.364 152.445C439.762 169.159 441.235 185.824 441.235 202.549C441.235 205.845 441.986 214.012 444.042 216.582C453.706 228.662 489.336 179.401 493.314 174.066C502.25 162.086 510.926 149.403 518.574 136.54C518.939 135.926 519.822 132.676 519.822 133.734" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>

            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
             
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I handled web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Freelance
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I handled React-based application development,
                    leveraging on React skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Freelance
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MERN Developer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - 2024{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
