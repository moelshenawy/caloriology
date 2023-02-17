import React, { useState } from 'react'
import { Calculator } from '../../assets/svgs';
import './index.scss'
import { Link } from 'react-router-dom';
import { CheckedRadio, CheckRadio } from '../../assets/svgs'
import { motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { useEffect } from 'react';
import Joi from "joi";
import { use } from 'i18next';

const Calc = () => {
  const [showCalc, setShowCalc] = useState(false)

  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)
  const [errorList, setErrorList] = useState()
  const [isLoading, setIsLoading] = useState()
  const [gender, setGender] = useState('')
  const { t, i18n } = useTranslation();
  const [calories, setCalories] = useState({
    age: "",
    height: "",
    weight: "",
    userGender: "",
    activity: ''
  });

  const changeFemale = () => {
    if (male === true) {
      setMale(false)
    }
    setFemale((prev) => !prev)
    setGender('')


  }

  const changeMale = () => {
    if (female === true) {
      setFemale(false)
    }
    setMale((prev) => !prev)
    setGender('')
  }



  useEffect(() => {
    if (female === true) {
      setGender('female')
    }

    if (male === true) {
      setGender('male')
    }

  }, [male, female])

  useEffect(() => {
    changeGender()

  }, [gender])



  const getCalories = (e) => {
    let userCalories = { ...calories };
    userCalories[e.target.name] = e.target.value
    setCalories(userCalories);

  };

  const changeGender = () => {
    const newGender = { ...calories };
    newGender.userGender = gender
    setCalories(newGender)

  }


  const submitForm = async (e) => {
    e.preventDefault();
    // Logic

    let validationRes = validationForm();

    if (validationRes.error) {
      // push error to error List Array
      setErrorList(validationRes.error.details)
      setIsLoading(false);

    } else {
      setErrorList([])


      const data = await axios.get(`https://fitness-calculator.p.rapidapi.com/dailycalorie`,

        {
          params: {
            age: calories.age,
            gender: calories.userGender,
            height: calories.height,
            weight: calories.weight,
            activitylevel: calories.activity
          },
          headers: {
            "X-RapidAPI-Key": "cf296e0620mshd5824004b4fcfd7p191180jsn58053e2b12fd",
            "X-RapidAPI-Host": 'fitness-calculator.p.rapidapi.com'
          }

        }


      )

      console.log(data)
    }


  };



  console.log(errorList)
  const validationForm = () => {
    let scheme = Joi.object({
      age: Joi.number().min(5).max(80).required(),
      weight: Joi.number().min(40).max(160).required(),
      height: Joi.number().min(130).max(230).required(),
      userGender: Joi.string().required(),
      activity: Joi.items(["Sedentary: little or no exercise", "Exercise 1-3 times/week", "Exercise 4-5 times/week", "Daily exercise or intense exercise 3-4 times/week"]).required(),

    });

    return scheme.validate(calories, { abortEarly: false });
  };


  return (
    <>
      <section id='calc' className={`${showCalc && 'pb-5'}`}>
        <div className="container">
          <div className="calc-section "
            dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}>
            <Link to='/food-calc' className="calc-svg">
              <Calculator />
            </Link>

            <div className="text-container ">
              <h3>{t('calcsec.calorieCalc')}</h3>
              <p>{t('calcsec.desc')}</p>
            </div>
            <div className="calc-btn ">
              <button onClick={() => setShowCalc((prev) => !prev)}> {t('calcsec.calculate')} </button>
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

              <form action="" onSubmit={submitForm}>

                <div className="age">
                  <label htmlFor="age">Age</label>
                  <input name='age' onChange={getCalories}
                    type="number" placeholder='25' />
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
                    type="number" placeholder='180' />
                  <span>cm</span>
                </div>

                <div className="weight">
                  <label htmlFor="weight">Weight</label>
                  <input name='weight' onChange={getCalories}
                    type="number" placeholder='180' />
                  <span>cm</span>
                </div>

                <div className="activity" onChange={getCalories}>
                  <label htmlFor="activity">Activity</label>
                  <select name="activity" id="">
                    <option value="none">Select your weekly activity</option>
                    <option value="level_1">Sedentary: little or no exercise</option>
                    <option value="level_2">Exercise 1-3 times/week</option>
                    <option value="level_3">Exercise 4-5 times/week</option>
                    <option value="level_4">Daily exercise or intense exercise 3-4 times/week</option>
                    <option value="level_5">Intense exercise 6-7 times/week</option>
                    <option value="level_6">Very intense exercise daily, or physical job</option>
                  </select>
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