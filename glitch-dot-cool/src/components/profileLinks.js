import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { StyledLink, Centered } from "../utils/utilComponents"
import colors from "../styles/colors"

const iconStyle = {
  fontSize: "1.6rem",
  color: `${colors.midgrey}`,
}

const ProfileLinks = links => {
  return (
    <Centered column>
      {links.props.links instanceof Array
        ? links.props.links.map(link => {
            return Object.keys(link).map(key => {
              return (
                <StyledLink key={key} href={link[key]} target="_blank">
                  {`${key.toLowerCase()} `}
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={iconStyle} />
                </StyledLink>
              )
            })
          })
        : Object.keys(links.props).map(key => {
            return (
              <StyledLink
                key={key}
                href={`${links.props[key]}`}
                target="_blank"
              >
                {`${key.toLowerCase()} `}
                <FontAwesomeIcon icon={faExternalLinkAlt} style={iconStyle} />
              </StyledLink>
            )
          })}
    </Centered>
  )
}

export default ProfileLinks
