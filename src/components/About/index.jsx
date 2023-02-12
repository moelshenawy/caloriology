import React, { useEffect } from 'react'
import "./index.scss"
import { Wallpaper } from '../../assets/svgs'
import { images } from '../../assets/constants'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { amr, cert1, cert2, cert3, cert4, cert5, cert6, bg } = images;

  // Animation
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 })


  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3
        }
      })
    }

    if (!inView) {
      animation.start({ x: '-100vw' })
    }

  }, [inView] );



  return (
    <>
      <section id='about' ref={ref}>
        <div className="bg-container">
          <img src={bg} alt="" />
        </div>

        <div className="container d-flex">
          <div className="img-side">
            <div className="icon-container">
              <Wallpaper />
            </div>

            <div className="img-container">
              <img src={amr} alt="" />
            </div>
          </div>
          <motion.div
            animate={animation}
            className="text-container">
            <h4>Welcome Message</h4>
            <h3>Hello, <br /> My Name Is Amr</h3>
            <p>I have always had an interest in food from <br /> a very young age, gbggbgg</p>
            <button>Contact Me</button>
          </motion.div>
        </div>
      </section>

      <section id='certificates'>
        <div className="container">
          <div className="certificates-title">
            <h2>Certificates</h2>
          </div>

          <div className="boxes-container">
            <div className='box'>
              <div className="img-container">
                <img src={cert1} alt="" className='w-100' />
              </div>
              <div className="text-container">
                <h5>Personal Trainer </h5>
              </div>
            </div>
            <div className="box">
              <div className="text-container">
                <h5 >Specialist in Sport Nutrition</h5>
              </div>
              <div className="img-container">
                <img src={cert2} alt="" className='w-100' />
              </div>
            </div>
            <div className="box">
              <div className="img-container">
                <img src={cert3} alt="" className='w-100' />
              </div>
              <div className="text-container">
                <h5 >Online Coaching</h5>
              </div>
            </div>
            <div className="box">
              <div className="text-container">
                <h5 className='ms-0'>Transformation Specialist</h5>
              </div>
              <div className="img-container">
                <img src={cert4} alt="" className='w-100' />
              </div>
            </div>
            <div className="box">
              <div className="img-container">
                <img src={cert5} alt="" />
              </div>
              <div className="text-container">
                <h5 >Sports Nutrition Specialist</h5>
              </div>
            </div>
            <div className="box">
              <div className="text-container">
                <h5 >Swedish Academy</h5>
              </div>
              <div className="img-container">
                <img src={cert6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About