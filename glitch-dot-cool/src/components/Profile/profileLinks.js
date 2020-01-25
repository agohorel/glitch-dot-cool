import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { StyledLink, Centered } from "../../utils/utilComponents"
import colors from "../../styles/colors"

const ProfileLinks = ({ links }) => {
  return (
    <Centered column start>
      <LinkContainer>
        {links.links instanceof Array
          ? links.links.map(link => {
              // if user enters links as array (ordered)
              return Object.keys(link).map(key => {
                return (
                  <ProfileLink
                    key={key}
                    href={link[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={faExternalLinkAlt} />
                    {`${key.toLowerCase()} `}
                  </ProfileLink>
                )
              })
            })
          : Object.keys(links).map(key => {
              // if user enters links as object (unordered)
              return (
                <ProfileLink
                  key={key}
                  href={`${links[key]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={faExternalLinkAlt} />
                  {`${key.toLowerCase()} `}
                </ProfileLink>
              )
            })}
      </LinkContainer>
    </Centered>
  )
}

export default ProfileLinks

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: ${colors.midgrey};
  margin-right: 0.25rem;
`

const ProfileLink = styled(StyledLink)`
  font-family: "Roboto Mono", monospace;
  font-size: 13px;
  padding: 0.25rem;

  :hover {
    background-color: ${colors.lightgrey};

    svg path {
      fill: black;
    }
  }
`
const LinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`
