import React, { useState } from 'react'
import { Calculator } from '../../assets/svgs';
import './index.scss'
import { Link } from 'react-router-dom';
import { CheckedRadio, CheckRadio } from '../../assets/svgs'
import { motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr'

const Calc = () => {
  const [showCalc, setShowCalc] = useState(false)
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)

  const [calories, setCalories] = useState({
    age: "",
    height: "",
    weight: "",
  });


  const changeFemale = () => {
    if (male === true) {
      setMale(false)
    }
    setFemale((prev) => !prev)

  }

  const changeMale = () => {
    if (female === true) {
      setFemale(false)
    }
    setMale((prev) => !prev)

  }


  const getCalories = (e) => {
    let userCalories = { ...calories };
    userCalories[e.target.name] = e.target.value;
    setCalories(userCalories);
  };




  const submitForm = async (e) => {
    e.preventDefault();
    // Logic
  };


  return (
    <>
      <section id='calc' className={`${showCalc && 'pb-5'}`}>
        <div className="container">
          <div className="calc-section ">
            <Link to='/food-calc' className="calc-svg">
              <Calculator />
            </Link>

            <div className="text-container ">
              <h3>Calorie Calculator</h3>
              <p>The calorie calculator can be used to estimate the number of calories  a person needs to consume each day.</p>
            </div>
            <div className="calc-btn ">
              <button onClick={() => setShowCalc((prev) => !prev)}> Calculate </button>
            </div>
          </div>

          {showCalc &&
            <motion.div
              animate={{ scale: [0, 1] }}
              transition={{ duration: 0.85, ease: "easeOut" }}

              id='calculator'>
              <div className="icon-container" onClick={() => setShowCalc(false)}>
                <GrClose />
              </div>

              <form action="" onClick={submitForm}>
                <div className="age">
                  <label htmlFor="age">Age</label>
                  <input name='age' onChange={getCalories}
                    type="text" placeholder='25' />
                  <span>cm</span>
                </div>

                <div className="gender">
                  <label htmlFor="gender">Gender</label>
                  <div className="male" onClick={changeMale}>
                    {male ? <CheckedRadio /> : <CheckRadio />}
                    <div className='gender-type'>Male</div>
                  </div>

                  <div className="female" onClick={changeFemale}>
                    {female ? <CheckedRadio /> : <CheckRadio />}
                    <div className='gender-type'>Female</div>

                  </div>

                </div>

                <div className="height">
                  <label htmlFor="height">Height</label>
                  <input name='height' onChange={getCalories}
                    type="text" placeholder='180' />
                  <span>cm</span>
                </div>

                <div className="weight">
                  <label htmlFor="weight">Weight</label>
                  <input name='weight' onChange={getCalories}
                    type="text" placeholder='180' />
                  <span>cm</span>
                </div>

                <div className="btns-container">
                  <div className="calc">
                    <button type='submit'>Calculate</button>
                  </div>

                  <div className="clear">
                    <button>Clear</button>
                  </div>
                </div>

              </form>

              <div className="result"> <span>2000</span> Calories</div>
            </motion.div >
          }
        </div>
      </section>
    </>
  )
}

export default Calc