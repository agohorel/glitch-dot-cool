import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import ProfileLinks from "./profileLinks"
import { Centered } from "../utils/utilComponents"
import colors from "../styles/colors"

const avatarStyles = {
  width: `10rem`,
  height: `10rem`,
  borderRadius: `50%`,
  display: `inline-block`,
  margin: `0 0 2rem 0`,
}

const ProfileCard = styled.div`
  display: inline-block;
  padding: 4rem;
  margin-right: 6rem;
  background-color: #fff;
  align-self: flex-start;

  h1 {
    white-space: nowrap;
  }

  @media only screen and (max-width: 960px) {
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
  let location = myProps.data.allContentfulAuthor.edges[0].node.location
  return (
    <ProfileCard>
      <Centered column>
        <Image
          style={avatarStyles}
          fluid={myProps.data.allContentfulAuthor.edges[0].node.avatar.fluid}
        />
        <h1>{myProps.pageContext.author}</h1>
        {location === null || undefined ? null : (
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            {` ${location}`}
          </p>
        )}
        <ProfileLinks props={links} />
        <p>{myProps.data.allContentfulAuthor.edges[0].node.contactEmail}</p>
      </Centered>
    </ProfileCard>
  )
}

export default Profile
