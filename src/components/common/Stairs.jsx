import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const current = useLocation().pathname;
  const StartRef = useRef(null);
  const pageRef = useRef(null);
  console.log(current);
  console.log(props.children);
  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.set(StartRef.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: "0",
        stagger: {
          amount: -0.2,
        },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.2,
        },
      });

      tl.to(StartRef.current, {
        display: "none",
      });

      tl.set(".stair", {
        y: "0%",
      });

      //   gsap.set(pageRef.current, { transformOrigin: "top left" });
      //   gsap.from(pageRef.current, {
      //     opacity: 0,
      //     delay: 0.75,
      // scale: 1.2, // This is causing the issue, when i am scaling the image in the Agence .jsx dislocates it moves
      //   });

      
        gsap.from(pageRef.current, {
          opacity: 0,
          delay: 0.75,
          scale:1.2,
        });
      
    },
    [current]
  );

  return (
    <div>
      <div ref={StartRef} className="h-screen w-full fixed flex top-0 z-20">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        <div className="page-inner">{props.children}</div>
      </div>
    </div>
  );
};

export default Stairs;
