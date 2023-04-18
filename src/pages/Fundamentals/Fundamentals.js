import React from 'react'
import "./fundamentals.style.scss"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Akachi from "../../assets/akachi.png"
import { Accordion } from '../../component/accordion/accordion';

export const Fundamentals = () => {
  const fundamentalRef = useRef(null)
  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(".line h1", {
        duration: .8,
        y: -20,
        ease: "power3.inout",
        delay: 0,
      })

    }, fundamentalRef)
    return () => context.revert()
  }, []);
  return (
    <div className='fundamentals'>
      <motion.div
        ref={fundamentalRef}
        className='page-header-2'
      >
        <div className='line'>
          <h1>Statements of Fundamental Truths</h1>
        </div>
        <Link to={"/pastors"} className="right" />
      </motion.div>

      <section className='mission-section'>
        <div className='mission-container'>
          <div className="mission-vission">
            <div>
              <div className='mission'>
                <h2>Vision</h2>
                <p>We are a centre for evangelism and revival that is constituted
                  to strategically impact lives and position them to discover
                  and recover their God ordained destinies.
                </p>
              </div>
              <div className='vission'>
                <h2>Mission</h2>
                <p>To present the Gospel of Jesus Christ in such a way that
                  turns non-Christians into converts, converts into disciples,
                  and disciples into mature, fruitful leaders, who will in turn
                  go into the world and reach others for Christ.
                </p>
              </div>
            </div>

          </div>
          <img src={Akachi} alt={"akachi"} />
        </div>
      </section>
      <section className='what-we-do-section'>
        <div className='core-values-container'>
          <h1>What we believe</h1>
          <div className='core-values'>
            <Accordion
              title={"The Scriptures Inspired"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The One True God"}
              body={"Loren Loren Loren Loren Loren Loren "} />
            <Accordion
              title={"The Deity of the Lord Jesus Christ"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Fall of Man"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Salvation of Man"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Ordinances of the Church"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Initial Physical Evidence of the Holy Spirit Baptism"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Baptism in the Holy Spirit"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"Sanctification"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Church and Its Mission"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Ministry"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"Divine Healing"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Blessed Hope"}
              body={"Loren Loren Loren Loren Loren Loren "}

            />
            <Accordion
              title={"The Millennial Reign of Christ"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The Final Judgment"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
            <Accordion
              title={"The New Heavens and the New Earth"}
              body={"Loren Loren Loren Loren Loren Loren "}
            />
          </div>
        </div>
      </section>
    </div>

  )
}
