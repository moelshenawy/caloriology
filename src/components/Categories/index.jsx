import React, { useState, useContext } from 'react'
import './index.scss'
import data from "../../data/data.json"
import CloseSign from './../../assets/svgs/CloseSign';
import BackSign from './../../assets/svgs/BackSign';
import { Link } from 'react-router-dom';
import { Sort } from '../../assets/svgs';
import DownArrow from './../../assets/svgs/DownArrow';
import Check from './../../assets/svgs/Check';
import { images } from '../../assets/constants';
import { appContext } from './../../Context/Store';

import { Like, LikeFill } from './../../assets/svgs';

export default function Categories() {
    const { addToFavorite, favVideos } = useContext(appContext)

    const { food } = images
    const catMenu = data.categoriesMenu
    const sideMenu = [{
        id: 1,
        title: 'Drinks'
    },
    {
        id: 2,
        title: 'Breakfast & Bread'
    },
    {
        id: 3,
        title: 'Egyptian Meals'
    },
    {
        id: 4,
        title: 'Snacks'
    },
    {
        id: 5,
        title: 'Junk Food'
    },
    {
        id: 6,
        title: 'Meats'
    },
    {
        id: 7,
        title: 'Eggs'
    },
    {
        id: 8,
        title: 'Vegetables & Fruits'
    },
    ]

    return (
        <>
            <section id='categories'>
                <div className="container">
                    <div className="filters-container d-flex justify-content-between ">
                        <div className="back-txt d-flex ">
                            <div className="back-home d-flex me-2 ">
                                {/* <div className="icon-container me-2">
                                <BackSign />
                            </div> */}
                                <div className="back-home-txt">
                                    <Link to="/" className=' text-decoration-none'> Home</Link>
                                </div>
                            </div>
                            <div className="back-categ d-flex">
                                <div className="icon-container me-2">
                                    <BackSign />
                                </div>
                                <div className="back-categ-txt">
                                    <a href='#' className=' text-decoration-none'> Categories</a>
                                </div>
                            </div>
                        </div>
                        <div className="desc d-flex justify-content-between ">
                            <div className="desc-txt">
                                <p>Egyptian Food </p>
                            </div>
                            <div className="icon-container">
                                <CloseSign />
                            </div>
                        </div>
                        <div className="sort-filter d-flex ms-auto  navbar-expand-lg">


                            <button
                                className="burger-btn navbar-toggler  text-secondary "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#menu"
                                aria-controls="menu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <p><span className='pe-2'><Sort /></span>Filter</p>
                            </button>




                            <div className="sort-container d-flex ms-auto ">
                                <div className="sort-icon  ">
                                    <Sort />
                                </div>
                                <div className="sort-txt ">
                                    <p > Sort by </p>
                                </div>
                                <div className="arrow-icon">
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container boxs-container">
                    <div className="page-content d-flex">
                        <div className="collapse d-flex" id="menu">
                            <div className="categories-menu show " >
                                <div className="title">
                                    <h3>Categories</h3>
                                </div>
                                {sideMenu.map((name, index) => (
                                    <div className="menu-content" key={index}>
                                        <div className="menu-row d-flex">
                                            <div className="icon-container me-2">
                                                <Check />
                                            </div>
                                            <div className="menu-txt">
                                                <p>{name.title}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="custom-container d-flex">
                            {catMenu.map((video, index) => (
                                <div className="box d-flex " key={index}>
                                    <div className="img-container">
                                        <img src={food} alt="" className='w-100' />
                                    </div>
                                    <div className="title">
                                        <h5 className='py-2'>{video.title}</h5>
                                    </div>
                                    <div className="desc">
                                        <p className='py-2'>{video.desc} <br /> {video.desc1}</p>
                                        <div className=" btns-container d-flex">
                                            <div className="learn-btn ">
                                                <a href={`/video-details/${video.id}`}>
                                                    <button>Learn More</button>
                                                </a>
                                            </div>
                                            <div className="icon-container" onClick={() => addToFavorite(video)}>
                                                {favVideos?.filter((item) => item.id === video.id)[0] ? <LikeFill /> : <Like />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
