import React from "react"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import {Link} from "gatsby"
import PropTypes from "prop-types"


const Tour = ({ tour }) => {

  const {
    Title,
    trek_banner_image,
    Price,
    Base,
    Duration,
    slug
  } = tour


  //let mainImage = images ? images[0].fluid : img
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <img src={trek_banner_image} className={styles.tour_img} alt="single tour"/>
        <Link fade className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{Title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} /> {Base}
          </h4>
          <div className={styles.details}>
            <h6>{Duration}</h6>
            <h6>from {Price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
