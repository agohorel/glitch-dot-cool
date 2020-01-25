import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import colors from "../../styles/colors"
import { StyledButton } from "../../utils/utilComponents"
import { slugify } from "../../utils/utils"

const GalleryDetails = ({ img: { node } }) => {
  const { title, description, author } = node

  return (
    <DetailsContainer>
      <h3>{title}</h3>
      <Description>{description}</Description>
      <Link to={`/${slugify(author)}/gallery`}>
        <BackButton>back</BackButton>
      </Link>
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
  width: 100%;

  :hover {
    color: ${colors.white};
  }
`