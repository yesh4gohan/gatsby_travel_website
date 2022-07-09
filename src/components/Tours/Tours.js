import React from "react"
import TourList from "./TourList"


const Tours = (props) => {
  const { tours } = props;
  return <TourList tours={tours} />
}

export default Tours
