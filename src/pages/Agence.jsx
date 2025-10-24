import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
const Agence = () => {
  const imageDivRef = useRef(null);
  const count = useRef(0);
  const imageRef = useRef(null);
  const imageArr = [
    "./images/teamMembers/CAMILLE.jpg",
    "./images/teamMembers/Carl.jpg",
    "./images/teamMembers/Chantal.jpg",
    "./images/teamMembers/Claire.jpg",
    "./images/teamMembers/HugoJoseph.jpg",
    "./images/teamMembers/joel.jpg",
    "./images/teamMembers/Lawrence.jpg",
    "./images/teamMembers/MAXIME.jpg",
    "./images/teamMembers/MEGGIE.jpg",
    "./images/teamMembers/MEL.jpg",
    "./images/teamMembers/Michele.jpg",
    "./images/teamMembers/Mylene.jpg",
    "./images/teamMembers/Olivier.jpg",
    './images/teamMembers/Sophie.jpg',
  ];

  const preloadedImages = [];

  imageArr.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img); // keeps it in memory
  });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        markers: true,
        trigger: imageDivRef.current,
        start: "top 22%",
        end: "top -180%",
        scrub: true,
        pin: true,
        onUpdate: function (element) {
          let x = Math.floor(element.progress * 13);
          console.log(x);
          if (count.current !== x) {
            imageRef.current.src = preloadedImages[x].src;
            count.current = x;
          }
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute  top-[5%] left-[30vw] h-[21vw] w-[15vw] rounded-xl overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full "
            src="./images/teamMembers/CAMILLE.jpg"
            alt="image is loading .. wait"
          />
        </div>

        <div className="relative font-[font2]">
          <div className="">
            <h1 className="mt-[27%] text-[20vw] uppercase leading-[17.5vw] text-center">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%]  text-[4vw] leading-[5vw]">
            <p className="indent-35">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
