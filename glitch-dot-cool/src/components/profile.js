import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

import { Centered, StyledLink } from "../utils/utilComponents"

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

const Profile = props => {
  let links = props.props.data.allContentfulAuthor.edges[0].node.links
  console.log(props.props)
  return (
    <ProfileCard>
      <Centered column>
        <ProfileImage
          src={props.props.data.allContentfulAuthor.edges[0].node.avatar.file.url}
        />
        <h1>{props.props.pageContext.author}</h1>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {` ${props.props.data.allContentfulAuthor.edges[0].node.location}`}
        </p>
        {Object.keys(links).map(key => {
          return (
            <StyledLink key={key}>
              <p>
                <a href={`${links[key]}`}>{key} </a>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </p>
            </StyledLink>
          )
        })}

        <p>{props.props.data.allContentfulAuthor.edges[0].node.contactEmail}</p>
      </Centered>
    </ProfileCard>
  )
}

export default Profile
