import "./about.styles.scss"
import { motion } from 'framer-motion';
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const AboutUs = () => {

  const aboutRef = useRef(null)

  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: -5,
        ease: "power3.inout",
        delay: 0,
      })

    }, aboutRef)
    return () => context.revert()
  }, []);
  return (
    <motion.div
      // initial={{ x: -window.innerWidth }}
      // animate={{ x: 0, duration: { duration: .5 } }}
      // exit={{
      //   x: -window.innerWidth,
      //   transition: { duration: .5 }
      // }}
      ref={aboutRef}
    >
      <div className={"page-header-9"}>
        <div>
          <div className="line">
            <h1>About us</h1>
          </div>

        </div>
      </div>
    </motion.div>
  )
}
