import React from 'react'
import { Calculator } from '../../assets/svgs';
import './index.scss'
import { Link } from 'react-router-dom';


const Calc = () => {
  return (
    <>

      <section id='calc' >
        <div className="container">
          <div className="calc-section ">
            <Link to='/food-calc' className="calc-svg">
              <Calculator />
            </Link>

            <div className="text-container ">
              <h3>Calorie Calculator</h3>
              <p>The calorie calculator can be used to estimate the number of calories  a person needs to consume each day.</p>
            </div>
            <Link to='/food-calc' className="calc-btn ">
              <button  >Calories Calculator </button>
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default Calc