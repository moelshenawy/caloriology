import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { Arabic, English, DownArrow, Logo } from '../../assets/svgs'
import Search from '../../assets/svgs/Search'
import { images } from '../../assets/constants'
import { useState } from 'react'
import Dropdown from '../../layouts/Dropdown'
import { motion } from 'framer-motion';


import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  // For Searching
  const [searchInput, setSearchInput] = useState(false)

  const { t, i18n } = useTranslation();
  console.log(t("navbar.home"))

  const menuRef = useRef()

  // Toggle outside to close menu
  useEffect(() => {
    const closeMenu = (e) => {
      if (showMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", closeMenu)
    return () => {
      document.removeEventListener("click", closeMenu)
    }

  }, [showMenu])

  return (
    <>
      <nav id='navbar' className='navbar navbar-expand-lg sticky-top'>
        <div className="container ">
          <button
            className="burger-btn navbar-toggler text-secondary "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="logo ">
            <Logo />
            <Link className="navbar-brand" to="/">Caloriology<br /> <span className='calc-span'>Food Calories</span></Link>
          </div>


          <div className="btns-container d-flex align-items-center justify-content-center">


            <div className="icons-container">
              <div className="search-btn">
                <Search />
              </div>

              {i18n.language === 'ar' ? <div onClick={() => {
                i18n.changeLanguage('en')
              }} className="lang-btn">
                <English />
              </div> : <div onClick={() => {
                i18n.changeLanguage('ar')
              }} className="lang-btn">
                <Arabic />

              </div>}

            </div>

            <div className="calc-btn-desktop">
              <Link className="nav-link" to="#"><button className='calc'>{t('navbar.food')}</button></Link>
            </div>
          </div>

          <div className="collapse navbar-collapse align-items-center justify-content-center" id="main">

            <div className="toggle-menu my-3"
              dir={`${i18n.language === "ar" ? 'rtl' : 'ltr'}`} >
              <div className="links">
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <NavLink activeClassName="active" className="nav-link " aria-current="page" to="/">{t('navbar.home')}</NavLink>
                  </li>
                  <li className="nav-item"
                    ref={menuRef}
                  >
                    <a className="nav-link" onClick={() => setShowMenu((prev) => !prev)}>{t('navbar.categories')}
                      <span className={`ps-2 ${showMenu && "active-menu"}`} >
                        <DownArrow />
                      </span>
                    </a>

                  </li>
                  <li className="nav-item ">
                    <NavLink activeClassName="active" className="nav-link  " to="favorites">{t('navbar.favorites')}</NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink activeClassName="active" className="nav-link  " to="about">{t('navbar.about')}</NavLink>
                  </li>

                </ul>



              </div>
              <div className="calc-btn-mob">
                <Link className="nav-link" to="#"><button className='calc'>{t('navbar.food')}</button></Link>
              </div>
            </div>
          </div>



          {showMenu &&
            <motion.div
              animate={{ y: [-300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className='cate-menu'>
              <Dropdown />
            </motion.div>
          }


        </div>



      </nav>
    </>
  )
}