import React, { Component } from "react"
import Layout from "../components/Layout"
// import Button from "../examples/Button"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"
import {response} from '../constants/tours_list';
export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="tours" />
        <Tours tours={response}/>
      </Layout>
    )
  }
}

