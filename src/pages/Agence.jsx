import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Register plugin outside component
gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const sectionRef = useRef(null);
  const count = useRef(0);
  const imageRef = useRef(null);
  const preloadedImagesRef = useRef([]);

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
    "./images/teamMembers/Sophie.jpg",
  ];

  // Preload images only once
  useEffect(() => {
    const preloadedImages = [];
    imageArr.forEach((src) => {
      const img = new Image();
      img.src = src;
      preloadedImages.push(img);
    });
    preloadedImagesRef.current = preloadedImages;
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const x = Math.floor(self.progress * 13);
          if (count.current !== x && preloadedImagesRef.current[x]) {
            imageRef.current.src = preloadedImagesRef.current[x].src;
            count.current = x;
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative py-1">
      {/* Fixed image container - render via portal so it's outside any transformed ancestor */}
      {typeof document !== "undefined" &&
        createPortal(
          <div className="fixed top-[55px] left-[30vw] h-[21vw] w-[15vw] rounded-xl overflow-hidden bg-green-500 z-50 pointer-events-none">
            <img
              ref={imageRef}
              className="h-full w-full object-cover"
              src="./images/teamMembers/CAMILLE.jpg"
              alt="Team member"
            />
          </div>,
          document.body
        )}

      {/* Scrollable section */}
      <div ref={sectionRef} className="section1 bg-red-500 p-1 min-h-[300vh]">
        <div className="relative font-[font2]">
          <div className="">
            <h1 className="mt-[27%] text-[20vw] uppercase leading-[17.5vw] text-center">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] text-[4vw] leading-[5vw]">
            <p className="indent-35">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section2 h-screen bg-blue-500"></div>
    </div>
  );
};

export default Agence;