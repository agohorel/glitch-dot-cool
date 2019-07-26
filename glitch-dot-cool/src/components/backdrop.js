import React from "react"
import styled from "styled-components"

import colors from "../styles/colors"

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.nearblack};
  z-index: 100;
`

const Backdrop = props => {
  let backdropVisibility = {
    opacity: `0`,
    pointerEvents: `none`,
    transition: `.2s ease-out all`,
  }

  if (props.show) {
    backdropVisibility.opacity = `.7`
    backdropVisibility.pointerEvents = `all`
  } else {
    backdropVisibility.opacity = `0`
    backdropVisibility.pointerEvents = `none`
  }

  return (
    <StyledBackdrop
      style={backdropVisibility}
      onClick={props.backdropToggleClickHandler}
    />
  )
}

export default Backdrop
