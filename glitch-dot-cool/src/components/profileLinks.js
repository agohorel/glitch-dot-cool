import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { StyledLink, Centered } from "../utils/utilComponents"
import colors from "../styles/colors"

const ProfileLinks = ({ links }) => {
  return (
    <Centered column>
      {links.links instanceof Array
        ? links.links.map(link => {
            return Object.keys(link).map(key => {
              return (
                <StyledLink key={key} href={link[key]} target="_blank">
                  {`${key.toLowerCase()} `}
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={iconStyle} />
                </StyledLink>
              )
            })
          })
        : Object.keys(links).map(key => {
            return (
              <StyledLink key={key} href={`${links[key]}`} target="_blank">
                {`${key.toLowerCase()} `}
                <FontAwesomeIcon icon={faExternalLinkAlt} style={iconStyle} />
              </StyledLink>
            )
          })}
    </Centered>
  )
}

export default ProfileLinks

const iconStyle = {
  fontSize: "1.6rem",
  color: `${colors.midgrey}`,
}
