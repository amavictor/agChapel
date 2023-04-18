import "./home.style.scss"
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { Link } from "react-router-dom";
import Pastor from "../../assets/pastor.png"
import Play from "../../assets/playbutton.svg"
import { useLenis } from "@studio-freight/react-lenis";

export const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: 0,
        ease: "power3.inout",
        delay: 0,
      })
      tl.to(".line2 h1", {
        duration: .8,
        y: 0,
        ease: "power3.inout",
        delay: 0
      })
    }, homeRef)
    return () => context.revert()
  }, []);


  return (
    <div className="home">
      <div ref={homeRef} className={"page-header-1"}>
        <div>
          <div className="line">
            <h1>Welcome to </h1>
          </div>
          <div className="line2">
            <h1>AG Chapel</h1>
          </div>
        </div>
        <Link to={"/fundamentals"} className="right" />
      </div>
      <section className="">
        <div className="pastor-message">
          <p>Message from the Pastor</p>
          <img className="play-button" alt="Play" src={Play} />
          <img src={Pastor} alt="pastor" className="pastor" />
        </div>
      </section>
    </div>
  );
};
