import React, { Component } from "react"
import styles from "../../css/items.module.css"

import Tour from "./Tour"
import Title from "../Title"

export default class TourList extends Component {
  state = {
    tours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours
    })
  }
  render() {
    return (
      <section className={styles.tours}>
        <Title subtitle="our experiences" />
        <div className={styles.center}>
          {this.state.tours?.map((tour) => {
            return <Tour key={tour.slug} tour={tour} />
          })}
        </div>
      </section>
    )
  }
}
