import "./styles.scss"
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from "framer-motion"

export const Ministries = () => {
  const ministryRef = useRef(null);

  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: 1,
        y: 0,
        ease: "power3.inout",
        delay: .3,
        // skewY: 11,
      })
    }, ministryRef)
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
      ref={ministryRef}
    >
      <div className={"page-header-7"}>
        <div>
          <div className="line">
            <h1>Our Ministries</h1>
          </div>

        </div>
        <Link to={"/contact-us"} className="right" />
      </div>
    </motion.div>
  );
}
