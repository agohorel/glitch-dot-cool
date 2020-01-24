import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"
import { StyledButton } from "../../utils/utilComponents"

const GalleryDetails = ({ img: { node } }) => {
  const { title, description } = node

  const goBack = () => {
    if (typeof window !== `undefined`) {
      window.history.back()
    }
  }

  return (
    <DetailsContainer>
      <h3>{title}</h3>
      <Description>{description}</Description>
      <BackButton onClick={goBack}>back</BackButton>
    </DetailsContainer>
  )
}

export default GalleryDetails

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 2rem;
  margin: 3rem 6rem 0 0;

  @media only screen and (max-width: 960px) {
    margin: 0 0 4rem 0;
    width: 100%;
    align-items: center;

    button {
      width: 50%;
    }
  }
`

const Description = styled.p`
  font-size: 14px;
`

const BackButton = styled(StyledButton)`
  padding: 0.5rem 1rem;
  background-color: ${colors.lightgrey};
  color: ${colors.midgrey};
  margin-top: 2rem;

  :hover {
    color: ${colors.white};
  }
`
