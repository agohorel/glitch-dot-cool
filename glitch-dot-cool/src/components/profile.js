import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

import { Centered, StyledLink } from "../utils/utilComponents"
import colors from "../styles/colors"

const avatarStyles = {
  width: `10rem`,
  borderRadius: `50%`,
  display: `inline-block`,
  margin: `0 0 2rem 0`
}
const ProfileCard = styled.div`
  display: inline-block;
  padding: 4rem;
  margin-right: 6rem;
  background-color: #fff;
  align-self: flex-start;

  @media only screen and (max-width: 900px) {
    margin: 0 0 4rem 0;
    width: 100%;
  }
`

const iconStyle = {
  fontSize: "1.6rem",
  color: `${colors.midgrey}`,
}

const Profile = props => {
  let myProps = props.props
  let links = JSON.parse(
    myProps.data.allContentfulAuthor.edges[0].node.links.internal.content
  )
  return (
    <ProfileCard>
      <Centered column>
        <Image style={avatarStyles}
          fluid={myProps.data.allContentfulAuthor.edges[0].node.avatar.fluid}
        />
        <h1>{myProps.pageContext.author}</h1>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
          {` ${myProps.data.allContentfulAuthor.edges[0].node.location}`}
        </p>
        {Object.keys(links).map(key => {
          return (
            <StyledLink key={key} href={`${links[key]}`} target="_blank">
              {`${key.toLowerCase()} `}
              <FontAwesomeIcon icon={faExternalLinkAlt} style={iconStyle} />
            </StyledLink>
          )
        })}

        <p>{myProps.data.allContentfulAuthor.edges[0].node.contactEmail}</p>
      </Centered>
    </ProfileCard>
  )
}

export default Profile
