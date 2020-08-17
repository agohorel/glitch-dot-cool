import React from "react"
import styled from "styled-components"

const Backdrop = ({ show, exitNav }) => {
  return <StyledBackdrop show={show} onClick={exitNav} />
}

export default Backdrop

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.scale_1};
  opacity: ${props => (props.show ? "0.7" : "0")};
  pointer-events: ${props => (props.show ? "all" : "none")};
  transition: 0.2s ease-out all;
  z-index: 100;
`
