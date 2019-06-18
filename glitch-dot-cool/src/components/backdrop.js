import React from "react"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  opacity: .7;
  z-index: 100;
`

const Backdrop = props => {
  return <StyledBackdrop onClick={props.backdropToggleClickHandler}/>
}

export default Backdrop
