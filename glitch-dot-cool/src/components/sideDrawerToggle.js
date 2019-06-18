import React from "react"
import styled from "styled-components"

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 75%;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  // prevent blue flash on chrome
  -webkit-tap-highlight-color: transparent;

  @media only screen and (min-width: 767px){
    display: none;
  }
`

const ToggleButtonLine = styled.div`
  height: 2px;
  width: 30px;
  background: black;

  :focus {
    outline: none;
  }
`

const DrawerToggle = props => {
    return (
      <ToggleButton onClick={props.click}>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
      </ToggleButton>
    )
}

export default DrawerToggle