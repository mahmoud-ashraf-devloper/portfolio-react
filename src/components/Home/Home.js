import React, { useState, useEffect } from "react";
import AnimateLetters from "./../AnimateLetters/AnimateLetters";
import "./style.scss";

const Home = () => {
  const data = {
    name: "hmoud",
    secondSentence: "Lets Build Something Awesome Together. Harry Up",
  };

  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 7000);
  }, []);

  return (
    <div className="fade-in-2 home-font text-white md:pl-8 pl-3 min-h-[75vh] flex items-center ">
      <div className="">
        <div className="md:text-5xl text-xl tracking-wider ">
          <div className="py-2 flex flex-col">
            <div className="md:flex  items-end my-6">
              <span className="text-sm block text-indigo-500 codes">
                &lt;h1&gt;
              </span>
              <span className="text-violet-200">
                <span>Hi, I'm M</span>
                <AnimateLetters
                  letterClass={letterClass}
                  strArr={data.name.split("")}
                  index={15}
                />
              </span>
              <span className="text-sm text-indigo-500 codes">&lt;/h1&gt;</span>
            </div>
          </div>
          <p className="pt-2 leading-snug w-100 break-normal">
            <AnimateLetters
              letterClass={letterClass}
              strArr={data.secondSentence.split("")}
              index={20}
            />
          </p>
          <div className="py-4 md:text-2xl text-xl text-indigo-900">
            <p className="leading-snug text-indigo-500 about-p">
              A Full-Stack Web developer freelancer with hands-on experience
              with modern technologies and its latest updates. I have an
              experience in both the backend and frontend.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-4">Download My CV:</div>
          <div className="flex md:flex-row flex-col w-full md:space-x-3 space-y-2 md:space-y-0">
            <a href="/projects/Mahmoud-Ashraf-Full-Stack-PHP.pdf" download>
              <button className="download-cv-font md:text-xl text-sm font-mono text-indigo-100 fade-in-3 flex justify-center  whitespace-nowrap px-8 py-2 rounded-md tracking-wider from-indigo-500 to-purple-800 bg-gradient-to-bl hover:bg-gradient-to-br hover:text-white/80 transition duration-300 ease-in-out uppercase">
                Download PDF
              </button>
            </a>
            <a href="/projects/Mahmoud-Ashraf-Full-Stack-PHP.docx" download>
              <button className="download-cv-font md:text-xl text-sm font-mono text-indigo-100 fade-in-3 flex justify-center  whitespace-nowrap px-8 py-2 rounded-md tracking-wider from-indigo-500 to-purple-800 bg-gradient-to-bl hover:bg-gradient-to-br hover:text-white/80 transition duration-300 ease-in-out uppercase">
                Download Word
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
