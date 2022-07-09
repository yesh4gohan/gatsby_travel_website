import React from "react"
import Tour from "../Tours/Tour"
import Title from "../Title"
import styles from "../../css/items.module.css"
import { Link } from "gatsby"

const FeaturedTours = (props) => {
  const tours = props.featuredTours.edges
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <Link fade to="/tours" className="btn-primary">
        All Tours
      </Link>
    </section>
  )
}

export default FeaturedTours
