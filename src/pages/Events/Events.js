import "./events.styles.scss"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import gsap from "gsap";


export const Events = () => {
  const eventRef = useRef(null)
  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: 0,
        ease: "power3.inout",
        delay: 0,
      })

    }, eventRef)
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
      ref={eventRef}
    >
      <div className={"page-header-6"}>
        <div>
          <div className="line">
            <h1>Events</h1>
          </div>

        </div>
        <Link to={"/ministries"} className="right" />
      </div>
    </motion.div>
  )
}
