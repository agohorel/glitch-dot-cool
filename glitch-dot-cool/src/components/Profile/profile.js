import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import ProfileLinks from "./profileLinks"
import { Centered, GatsbyLink } from "../../utils/utilComponents"
import colors from "../../styles/colors"

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

const Profile = ({ profileData }) => {
  const { authorName, contactEmail, location, avatar, links } = profileData
  const parsedLinks = JSON.parse(links.internal.content)
  return (
    <ProfileCard>
      <Centered column>
        <GatsbyLink to={`${authorName}/posts`}>
          <Avatar fluid={avatar.fluid} />
        </GatsbyLink>
        <GatsbyLink to={`${authorName}/posts`}>
          <h1>{authorName}</h1>
        </GatsbyLink>
        <p style={{ whiteSpace: "nowrap" }}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> {contactEmail}
        </p>
        {location === null || undefined ? null : (
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            {` ${location}`}
          </p>
        )}
        <ProfileLinks links={parsedLinks} />
      </Centered>
    </ProfileCard>
  )
}

export default Profile

const Avatar = styled(Image)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 0 0 2rem 0;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
