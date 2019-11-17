import React, { Fragment } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBandcamp,
  faSoundcloud,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import colors from "../styles/colors"
import measurements from "../styles/measurements"
import { flicker } from "../styles/animations"

const LinkIcons = ({ className }) => {
  return (
    <Fragment>
      <IconsContainer className={className}>
        <a
          href="https://glitchdotcool.bandcamp.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon icon={faBandcamp} />
        </a>
        <a
          href="https://soundcloud.com/glitch-dot-cool"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon icon={faSoundcloud} />
        </a>
        <a
          href="https://www.facebook.com/glitchcool-105999944119086"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/glitch.cool/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon icon={faInstagram} />
        </a>
      </IconsContainer>
    </Fragment>
  )
}

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    font-decoration: none;
    color: black;
  }

  a:hover svg {
    color: ${colors.lightgrey};
    animation: ${flicker} 0.2s forwards;
  }

  a:not(:last-of-type) {
    margin-right: 2rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`

const FooterLinks = styled(LinkIcons)`
  svg {
    color: ${colors.midgrey};
  }

  @media only screen and (max-width: ${measurements.breakpointMobileNav}px) {
    display: none;
  }
`
export { LinkIcons, FooterLinks }
