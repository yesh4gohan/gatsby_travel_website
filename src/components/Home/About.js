import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi
            sit obcaecati unde, commodi porro.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            debitis natus iste.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
