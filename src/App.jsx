import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer, VideoDetails, Favorites } from './components/'
import Home from './containers/Home/index';
import About from './components/About/index'
import Categories from './components/Categories/index';
import CounterContextProvider from "./Context/Store";

export default function App() {
  return (
    <>
      <CounterContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='categories' element={<Categories />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path="video-details" element={<VideoDetails />} >
            <Route path=":id" element={<VideoDetails />} />
          </Route >
        </Routes>
        <Footer />
      </CounterContextProvider>

    </>
  )
}
