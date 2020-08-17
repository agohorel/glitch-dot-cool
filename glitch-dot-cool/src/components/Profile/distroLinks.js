import React from "react"
import styled from "styled-components"

import { StyledLinkButton } from "../../utils/utilComponents"

const DistroLinkWrapper = styled.div`
  margin: 2rem 0 1rem 0;

  h3 {
    margin-bottom: 1rem;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`

const DistroLinks = props => {
  if (Object.keys(props.props).length) {
    return (
      <DistroLinkWrapper>
        <h3>links:</h3>
        <Buttons>
          {props.props.links instanceof Array
            ? props.props.links.map(link => {
                return Object.keys(link).map(key => {
                  return (
                    <StyledLinkButton
                      style={{ marginBottom: `1rem` }}
                      key={key}
                      href={link[key]}
                      target="_blank"
                    >
                      {`${key}`.toLowerCase()}
                    </StyledLinkButton>
                  )
                })
              })
            : Object.keys(props.props).map(link => {
                return (
                  <StyledLinkButton
                    style={{ marginBottom: `1rem` }}
                    key={link}
                    href={props.props[link]}
                    target="_blank"
                  >
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
