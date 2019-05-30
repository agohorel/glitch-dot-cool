import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// eslint-disable-next-line
import styles from "../styles/global.css"
import colors from "../styles/colors"

const StyledLink = styled.li`
  display: inline-block;
  margin-right: 1rem;

  a,
  a:visited {
    text-decoration: none;
    color: ${colors.black};
    transition: 0.2s ease all;

    :hover {
      color: ${colors.lightgrey};
    }
  }
`

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 67%;
  padding: 0 5rem;
`

const Footer = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: ${colors.darkgrey};
`

const ListLink = props => (
  <StyledLink>
    <Link to={props.to}>{props.children}</Link>
  </StyledLink>
)

export default ({ children }) => (
  <div>
    <Wrapper>
      <header style={{ marginBottom: `1.5rem` }}>
        <StyledLink>
          <Link to="/">
            <h3>glitch[dot]cool</h3>
          </Link>
        </StyledLink>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </Wrapper>
    <Footer />
  </div>
)
