import "./pastors.styles.scss"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { PastorSlider } from "../../component/pastor-slider/pastorSlider";


export const Pastors = () => {
  const pastorRef = useRef(null)
  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: -20,
        ease: "power3.inout",
        delay: 0,
      })

    }, pastorRef)
    return () => context.revert()
  }, []);
  return (
    <div>
      <motion.div
        // initial={{ x: -window.innerWidth }}
        // animate={{ x: 0, duration: { duration: 1 } }}
        // exit={{
        //   x: -window.innerWidth,
        //   transition: { duration: 1 }
        // }}
        className={"page-header-3"}
        ref={pastorRef}
      >
        <div className="line">
          <h1>Our Pastors</h1>
        </div>
        <Link to={"/sermons"} className="right" />

      </motion.div>

      <div>
        <div>
          <PastorSlider/>
        </div>
      </div>
    </div>

  )
}
