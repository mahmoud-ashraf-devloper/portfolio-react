import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup } from "react-leaflet/Popup";
import { Marker } from "react-leaflet/Marker";
import AnimateLetters from "./../AnimateLetters/AnimateLetters";

import "./style.scss";

const Contact = () => {
  const data = {
    title: "Contact Me",
  };

  const position = [28.499408, 30.792526];

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 7000);
  }, []);

  return (
    <div className="w-full  md:mx-6 px-2 contact-page ">
      <div className="md:text-5xl text-3xl md:pl-8  relative text-white pb-6 ">
        <span className="text-3xl pr-1 md:pr-3 text-indigo-500 codes">
          &lt;h1&gt;
        </span>
        <AnimateLetters
          letterClass={letterClass}
          strArr={data.title.split("")}
          index={15}
        />
        <span className="text-3xl pl-1 md:pl-3 text-indigo-500 codes">
          &lt;/h1&gt;
        </span>
      </div>
      <div className="md:grid md:grid-cols-6 gap-6">
        <div className="col-span-2 fade-in-1 px-3 bg-indigo-500/25 rounded-xl">
          <div className="py-10 text-slate-400 font-sans">
            <div className="flex flex-col py-3">
              <label className="pb-1 md:text-xl">Email</label>
              <span className="w-full opacity-95 rounded-lg text-lg">
                mahmoud.a.developer@gmail.com
              </span>
            </div>
            <div className="flex flex-col py-3">
              <label className="pb-1 md:text-xl">Phone</label>
              <span className="w-full opacity-95 rounded-lg text-lg">
                +201154557909
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
