import "./contact.style.scss"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";


export const ContactUs = () => {
  const contactRef = useRef(null)
  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: -10,
        ease: "power3.inout",
        delay: 0,
      })

    }, contactRef)
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
      ref={contactRef}
    >
      <div className={"page-header-8"}>
        <div>
          <div className="line">
            <h1>Contact us</h1>
          </div>

        </div>
        <Link to={"/about-us"} className="right" />
      </div>
    </motion.div>
  )
}
