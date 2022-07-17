import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <h4>Why Chose Us</h4>
          <p>
            Experienced Team with professional staff
          </p>
          <p>
            Team of certified Mountaineers who have done many successful expeditions
          </p>
          <p>
            Local guides who know the in and outs of the terrain
          </p>
          <p>
            Safety oriented team who have been in many rescue operations in the past
          </p>
        </article>
        <article>
        <img src={'https://res.cloudinary.com/dlxstraey/image/upload/v1657984622/trek%20images/about_us_image_si647i.jpg'} className={styles.tour_img} alt="single tour"/>
        </article>
      </div>
    </section>
  )
}

export default About
