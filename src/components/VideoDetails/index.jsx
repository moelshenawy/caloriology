import './index.scss'
import { images } from "../../assets/constants"
import RecProds from './../RecProds/index';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '../../assets/svgs';
import { useEffect, useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'
const VideoDetails = () => {
  const { social, social1 } = images
  const [showBox, setShowBox] = useState(false)

  const boxRef = useRef()

  // Toggle outside to close menu
  useEffect(() => {
    const closeMenu = (e) => {
      if (showBox && boxRef.current && boxRef.current.contains(e.target)) {
        setShowBox(false)
      }
    }

    document.addEventListener("click", closeMenu)
    return () => {
      document.removeEventListener("click", closeMenu)
    }

  }, [showBox])

  return (
    <>
      <section id='video-details'>
        <div className="container">
          <div className="guide-container">
            <div className="guide">
              <Link to='/'>Home
                <ArrowLeft />
              </Link>

            </div>
            <div className="guide">
              <Link to='/categories'>Categories
                <ArrowLeft />
              </Link>
            </div>
            <div className="guide">
              <Link to='/'>Egyptian Meals
                <ArrowLeft />
              </Link>
            </div>
            <div className="guide">
              <Link to='/'>Betengan
              </Link>
            </div>
          </div>
        </div>


        <div className='container content'>


          <div className="video-container ">
            <iframe width="347" height="618" src="https://www.youtube.com/embed/SoRBQtfXv-w" title="السعرات الحرارية فى زيت الزيتون و علاقتة بزيادة الوزن !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="details-container">
            <div className="title">
              <h1 className='h3'>Betengan</h1>
            </div>
            <div className="desc">
              <p>we help you calculate the calories to reach your body goal we help you calculate the calories to reach your body goal we help you calculate the calories to reach your body.</p>
            </div>

            <button className='watch' onClick={() => setShowBox((prev) => !prev)}>Watch on</button>




          </div>
        </div>


      </section>

      {showBox &&
        <motion.div
          animate={{ y: [-300, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}

          id='watch-on'>

          <div className="watch-container">

            <div className="social-container" ref={boxRef}>
              <div className="icon-container" onClick={() => setShowBox(false)}>
                <GrClose />
              </div>
              <div className="title mt-3">
                <h2 className='h4'>Watch On</h2>
              </div>

              <div className="social-links">
                <span className='me-5'>
                  <a href="#" target='_blank'>
                    <img src={social} alt="Instagram" />
                  </a>
                </span>
                <span><a href="#" target='_blank'>
                  <img src={social1} alt="TikTok" />
                </a></span>
              </div>
            </div>
          </div>
        </motion.div>
      }

      <RecProds />



    </>
  )
}

export default VideoDetails