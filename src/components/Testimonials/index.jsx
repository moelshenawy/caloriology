import React, { useState } from 'react'

import { images } from "../../assets/constants"
import { Qoutes } from "../../assets/svgs"
import './index.scss'
import Carousel from 'react-elastic-carousel'


export default function Testimonials() {

  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, },
    { width: 337, itemsToShow: 1, },
    { width: 450, itemsToShow: 1, },
    { width: 550, itemsToShow: 2, },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, },

  ])

  const { test } = images;
  const testimonials = [{
    id: 1,
    desc: '"We help you calculate the',
    desc1: 'calories to reach your body goal"',
    img: test,
    name: "Ahmed Mohamed",
    job: "Engineer"
  },
  {
    id: 2,
    desc: '"We help you calculate the',
    desc1: 'calories to reach your body goal"',
    img: test,
    name: "Ahmed Mohamed",
    job: "Engineer"
  },
  {

    id: 3,
    desc: '"We help you calculate the',
    desc1: 'calories to reach your body goal"',
    img: test,
    name: "Ahmed Mohamed",
    job: "Engineer"
  },
  {
    id: 4,
    desc: '"We help you calculate the',
    desc1: 'calories to reach your body goal"',
    img: test,
    name: "Ahmed Mohamed",
    job: "Engineer"
  },
  {
    id: 5,
    desc: '"We help you calculate the',
    desc1: 'calories to reach your body goal"',
    img: test,
    name: "Ahmed Mohamed",
    job: "Engineer"
  },
  {

    id: 6,
    desc: '"We help you calculate the',
    desc1: 'calories to reach your body goal"',
    img: test,
    name: "Ahmed Mohamed",
    job: "Engineer"
  }
  ]

  return (
    <>
      <section id='clients'>
        <div className="container py-5">
          <h4>What Clients Say</h4>
          <div className="row test-wrap justify-content-center-align-items-center mt-4 ">
            <Carousel breakPoints={breakPoints} itemsToShow={3} pagination={true}
            >
              {testimonials.map((client, index) => (
                <div className="clients" key={index}>
                  <div className="client-text  pt-5 ">
                    <Qoutes />
                    <p className=' py-2 px-5'>{client.desc} <br />{client.desc1}</p>
                    <div className="client-info d-flex align-items-center">
                      <img className='ps-5' src={client.img} alt="" />
                      <h6 className='ps-2 '>{client.name} <br />
                        <span  >{client.job}</span>
                      </h6>

                    </div>

                  </div>
                </div>
              ))}
            </Carousel>





          </div>
        </div>
      </section>
    </>
  )
}
