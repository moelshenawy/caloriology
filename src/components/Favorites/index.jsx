import React, { useContext } from 'react'
import './index.scss'
import { images } from '../../assets/constants';
import { LikeFill, Like } from './../../assets/svgs/';
import data from "../../data/data.json"
import { Link } from 'react-router-dom';
import { appContext } from './../../Context/Store';


const Favorites = () => {
  const { food } = images

  const catMenu = data.categoriesMenu

  const { addToFavorite, favVideos } = useContext(appContext)

  return (
    <section id='favorites'>
      <div className="container">
        {favVideos.length !== 0 ?
          <>
            <div className="title">
              <h1>Favorites videos</h1>
            </div>
            {/* If There's Favorites videos */}
            <div className='boxes-container '>
              {favVideos.map((video, idx) =>
                <div className="box ">
                  <div className="img-container">
                    <img src={food} alt="" />
                  </div>
                  <div className="title">
                    <h3>{video.title}</h3>
                  </div>
                  <div className="desc">
                    <p>{video.desc}</p>
                  </div>

                  <div className="btns-container d-flex">
                    <div className="learn-btn">
                      <a href={`video-details/${video.id}`}>
                        <button className='learn-btn'>Watch</button>
                      </a>
                    </div>
                    <div className="icon-container" onClick={() => addToFavorite(video)}>
                      {favVideos?.filter((item) => item.id === video.id)[0] ? <LikeFill /> : <Like />}                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
          : <div className='no-fav'>
            <h1>There's no videos in your favorites
            </h1>
          </div>}
      </div>
    </section>
  )
}

export default Favorites