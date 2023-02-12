import React from 'react'
import { Calculator } from '../../assets/svgs';
import './index.scss'


const Calc = () => {
  return (
    <>

      <section id='calc' >
        <div className="container">
          <div className="calc-section ">
            <div className="calc-svg">
              <Calculator />
            </div>

            <div className="text-container ">
              <h3>Calorie Calculator</h3>
              <p>The calorie calculator can be used to estimate the number of calories  a person needs to consume each day.</p>
            </div>
            <div className="calc-btn ">
              <button  >Calories Calculator </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Calc