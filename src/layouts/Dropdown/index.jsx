import React from "react"
import { Link } from "react-router-dom"
import './index.scss'
import { ArrowLeft } from '../../assets/svgs'
import { GrClose } from 'react-icons/gr'

const Dropdown = () => {

  const allCategoires = [
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
    {
      id: 7,
      title: "Egyption Food",
      description: "Egyption Food caloriores",
      thumbnail: "https://dashboard.caloriology.com/storage/Category/Thumbnails/FZ3UBK5KtwESxFvzWnYPcTDbCIRMxw8WcNf0CTj4.jpg",
      video: "https://dashboard.caloriology.com/storage/alLgjh-gGns",
      top_rated: "no",
      recently_added: "yes",
      facebook_link: "wwww.facebook.com",
      youtube_link: "alLgjh-gGns",
      tiktok_link: "wwww.tiktok.com",
      instagram_link: "wwww.instagram.com",
      category_id: null,
      created_at: "2023-02-08T17:22:49.000000Z"
    },
  ]

  return (
    <div
      id="dropdown">
      <div className="dropdown-inner">
        <div className="categories">
          <Link to='/categories'>
            <ArrowLeft />
            <h6>categories</h6>
          </Link>

          <button>
            <GrClose />
          </button>
        </div>

        <div className="boxes-container">
          {allCategoires.map((category, idx) => (
            <Link key={idx}>
              <div className="box">
                <div className="img-container">
                  <img src={category.thumbnail} alt="" />
                </div>

                <div className="title">
                  <h6>
                    {category.title}
                  </h6>
                </div>
              </div>
            </Link>
          ))}

          <Link to='/categories'>
            <div className="all-box">
              <div className="all-title">
                <h6>
                  Se All
                </h6>
              </div>
            </div>
          </Link>
        </div>


      </div>
    </div>
  )
}


export default Dropdown