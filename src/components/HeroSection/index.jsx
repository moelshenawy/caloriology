import React, { useEffect } from 'react';
import './index.scss'
import { Decoration, Wallpaper } from '../../assets/svgs';
import { images } from '../../assets/constants';
import Carousel from 'react-elastic-carousel'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { bg, food4 } = images;
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

  }, [inView]);

  return (
    <>

      <section id="hero" ref={ref}>

        <div className="bg-container">
          <img src={bg} alt="" />
        </div>

        <header>
          <div className="container d-flex my-5 ">
            <div className="img-side">
              <div className="imgs-container">
                <div className="icon-container">
                  <Wallpaper />
                </div>
                <div className="img-container">
                  <img src={food4} alt="" />
                </div>
              </div>

            </div>


            <motion.div
              animate={animation}
              className="text-container">
              <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={4000}
                easing="ease"
                transitionMs={700}
              >
                <div>
                  <h2>Keep Your Body At Its Best</h2>
                  <Decoration renderArrow={false} />
                  <p className='Hero-text'>Calories are like tiny terrorists that invade  your body and make you fat.
                    We help you calculate the calories to reach  your body goal.</p>
                </div>
                <div>
                  <h2>Keep Your Body At Its Best</h2>
                  <Decoration renderArrow={false} />
                  <p className='Hero-text'>Calories are like tiny terrorists that invade  your body and make you fat.
                    We help you calculate the calories to reach  your body goal.</p>
                </div>
                <div>
                  <h2>Keep Your Body At Its Best</h2>
                  <Decoration renderArrow={false} />
                  <p className='Hero-text'>Calories are like tiny terrorists that invade  your body and make you fat.
                    We help you calculate the calories to reach  your body goal.</p>
                </div>

              </Carousel>

            </motion.div>
          </div>
        </header>








      </section>

    </>
  )
}
export default Hero