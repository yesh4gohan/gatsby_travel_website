import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

const Template = ( data ) => {
  console.log({datay:data})
  const {
    Title,
    trek_banner_image,
    Photo_list,
    Price,
    Base,
    Itinerary,
    difficulty,
    altitude,
    Duration
  } = data.pageContext || {};
  // destructuring images into 2 part first for main image and the rest for display below the main

  return (
    <Layout>
      <SEO title={Title} />
      <StyledHero img={trek_banner_image}>
        <Banner title={Title}></Banner>
      </StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {Photo_list.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={{src:item}}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{Title}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              Starting from {Price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {Base}
            </p>
          </div>
          <h4>duration : {Duration}</h4>
          <h4>difficulty : {difficulty}</h4>
          <h4>altitude : {altitude}</h4>

          <p className={styles.dec}>{Itinerary}</p>
        </div>
      </section>
    </Layout>
  )
}

export default Template
