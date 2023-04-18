import "./gallery.styles.scss"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";

export const Gallery = () => {
  const sermonRef = useRef(null)
  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: 0,
        ease: "power3.inout",
        delay: 0,
      })

    }, sermonRef)
    return () => context.revert()
  }, []);
  return (
    <motion.div
      // initial={{ x: window.innerWidth, width: 0 }}
      // animate={{ x: 0, width: "100%", duration: { duration: 1 } }}
      // exit={{
      //   x: -window.innerWidth,
      //   transition: { duration: 1 }
      // }}
      ref={sermonRef}
      className='page-header-5'
    >
      <div className='line'>                                                                        
        <h1>Gallery</h1>
      </div>
      <Link to={"/events"} className="right" />
    </motion.div>
  )
}
