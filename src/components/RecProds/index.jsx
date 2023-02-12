import React, { useState, useContext } from 'react'
import data from "../../data/data.json"
import { images } from '../../assets/constants';
import { Like, LikeFill } from '../../assets/svgs';
import Carousel from 'react-elastic-carousel'
import './index.scss'
import { Link } from 'react-router-dom';
import { appContext } from './../../Context/Store';


export default function RecProds() {

  const [breakPoints] = useState([
    { width: 1, itemsToShow: 2, },
    { width: 337, itemsToShow: 2, },
    { width: 450, itemsToShow: 2, },
    { width: 550, itemsToShow: 3, },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 4 },
  ])

  const { addToFavorite, favVideos } = useContext(appContext)

  const { food } = images;

  const recProd = data.recProd;




  return (
    <>
      <section id='recently-added'>
        <div className="container">
          <h3>Recently Added</h3>
          <div className="row recent-wrap">
            <Carousel breakPoints={breakPoints} pagination={true} >
              {recProd.map((product, index) => (
                <div className="box col-md-3" key={index}>
                  <div className="img-container">
                    <img className='w-100' src={food} alt="" />
                  </div>

                  <div className="title">
                    <h5 className='my-2'>{product.title}</h5>
                  </div>

                  <div className="desc">
                    <p className='recently-text'>{product.desc} <br /> {product.desc1}</p>
                  </div>

                  <div className="btns-container d-flex">
                    <div className="learn-btn">
                      <a href={`/video-details/${product.id}`}>
                        <button className='learn-btn'>Watch</button>
                      </a>
                    </div>
                    <div className="icon-container" onClick={() => addToFavorite(product)}>
                      {favVideos?.filter((item) => item.id === product.id)[0] ? <LikeFill /> : <Like />}
                    </div>

                  </div>
                </div>
              ))}

            </Carousel>

          </div>












        </div>

      </section >
    </>
  )
}
