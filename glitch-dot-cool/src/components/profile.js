import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

import { Centered, StyledLink } from "../utils/utilComponents"
import colors from "../styles/colors"

const ProfileImage = styled.img`
  width: 5rem;
  border-radius: 50%;
  display: inline-block;
  margin: 0 0 1rem 0;
`
const ProfileCard = styled.div`
  display: inline-block;
  padding: 2rem;
  margin-right: 3rem;
  background-color: #fff;
  align-self: flex-start;
`

const iconStyle = {
    fontSize: ".8rem",
    color: `${colors.midgrey}`
}

const Profile = props => {
  let myProps = props.props
  let links = myProps.data.allContentfulAuthor.edges[0].node.links
  return (
    <ProfileCard>
      <Centered column>
        <ProfileImage
          src={myProps.data.allContentfulAuthor.edges[0].node.avatar.file.url}
        />
        <h1>{myProps.pageContext.author}</h1>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt}  style={iconStyle}/>
          {` ${myProps.data.allContentfulAuthor.edges[0].node.location}`}
        </p>
        {Object.keys(links).map(key => {
          return (
            <StyledLink key={key} href={`${links[key]}`} target="_blank">
              {`${key} `}
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
