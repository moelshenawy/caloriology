import React from 'react'
import { Logo } from '../../assets/svgs'
import { Link } from 'react-router-dom';
import './index.scss'
import { images } from '../../assets/constants'


export default function Footer() {
    const { social, social1 } = images
    return (
        <>

            <footer >
                <div className="container ">
                    <div className="row">
                        <div className=" d-flex align-items-center align-items-lg-start mb-5 col-lg-3 col-md-12">
                            <Logo />
                            <Link className="caloriology-footer" to="home">Caloriology<span className='footer-span'>Food Calories</span></Link>
                        </div>
                        <div className="col-lg-2  mb-5 col-md-12">
                            <p>Breakfast & Bread</p>
                            <p>Drinks</p>
                            <p>Egyptian Meals</p>
                            <p>Snacks</p>
                        </div>

                        <div className="col-lg-2 mb-5 col-md-12">
                            <p>Junk Food</p>
                            <p>Meats</p>
                            <p>Eggs</p>
                            <p>Vegetables & Fruits</p>
                        </div>

                        <div className="col-lg-2 mb-5 col-md-12 d-flex flex-column ">
                            {/* <p>About us</p> */}
                            <p> <Link className='footer-links' to="about">About Us</Link></p>
                            <p> <Link className='footer-links' to="">Contact Us</Link></p>
                            <p> <Link className='footer-links' to="favorites">Favorites</Link></p>


                        </div>

                        <div className="col-lg-2 mb-5 col-md-12 ">
                            <p>Follow Us</p>
                            <a className='pe-3' href="https://www.instagram.com/caloriology1/" ><img src={social} alt="" /></a>
                            <a href="https://www.tiktok.com/@caloriology" ><img src={social1} alt="" /></a>
                            <Link className='text-decoration-none ' to="#"><button className='footer-calc'>calculator</button></Link>
                        </div>
                    </div>

                </div>
            </footer>
        </>

    )
}
