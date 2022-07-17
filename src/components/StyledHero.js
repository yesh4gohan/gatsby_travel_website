import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={{src:img}}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.5))"};
  background-position: center;
  background-size: cover;
  display: flex;
  opacity: 1 !important;
  justify-content: center;
  align-items: center;
`
