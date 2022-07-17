import React, { Component } from "react"
import Layout from "../components/Layout"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"
import response from "../trek_data.json"
export default class tours extends Component {
  state = {
    tours: JSON.parse(JSON.stringify(response)),
  }

  render() {
    return (
      <Layout>
        <SEO title="tours" />
        <Tours tours={this.state.tours} />
      </Layout>
    )
  }
}
