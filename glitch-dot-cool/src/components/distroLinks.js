import React from "react"
import styled from "styled-components"

import { StyledLinkButton } from "../utils/utilComponents"

import colors from "../styles/colors.js"

const DistroLinkWrapper = styled.div`
  margin: 2rem 0;
  
  h3 {
    margin-bottom: 1rem;
  }
`

const Buttons = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`

const DistroLinks = props => {
  console.log(props)
  if (Object.keys(props.props).length) {
    return (
      <DistroLinkWrapper>
        <h3>elsewhere on the web:</h3>
        <Buttons>
          {Object.keys(props.props).map(link => {
            return (
              <StyledLinkButton href={props.props[link]} target="_blank">
                {link}
              </StyledLinkButton>
            )
          })}
        </Buttons>
      </DistroLinkWrapper>
    )
  } else {
    return null
  }
}

export default DistroLinks