import React from 'react'
import './index.scss'


export const FoodCalc = () => {

    const submitForm = async (e) => {
        e.preventDefault();
        // Logic
      };


  return (
    <>
    <div id='food-calc'>
    <div className="container">
        <div className="title">
            <h3>Food Calculator</h3>
            <p>The food calculator could calculate calories in any meal</p>
        </div>
        <div className="box-input">
        <form action="" onClick={submitForm}>
            <div className="meal">
                <label htmlFor="meal">Meal</label>
                <input type="text" name='meal' placeholder='Write the meal here' />
            </div>
            <div className="quantity">
                <label htmlFor="quantity">Quantity</label>
                <input type="text" name='quantity' placeholder='Write the quantity here' />
            </div>
            <div className="calc-btn">
                <button type='submit'>Calculate</button>
            </div>
        </form>
        </div>
        <div className="container">
        <div className="values ">
            <div className="calories text-center">
                <h6>Calories</h6>
                <p>0</p>
            </div>
            <div className="protein text-center">
                <h6>Protein</h6>
                <p>0</p>
            </div>
            <div className="carbohydrate text-center">
                <h6>Carbohydrate</h6>
                <p>0</p>
            </div>
            <div className="fats text-center">
                <h6>Fats</h6>
                <p>0</p>
            </div>
            <div className="fiber text-center">
                <h6>Fiber</h6>
                <p>0</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}
