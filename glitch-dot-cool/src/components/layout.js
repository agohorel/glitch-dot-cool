import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import styles from "../styles/global.css"
import colors from "../styles/colors"

const StyledLink = styled.li`
    display: inline-block;
    margin-right: 1rem;

    a, 
    a:visited {
        text-decoration: none;
        color: ${colors.black};
        transition: .2s ease all;

        :hover {
            color: ${colors.lightgrey};
        }
    }

`;

const Wrapper = styled.div`
    margin: 3rem auto;
    max-width: 67%;
    padding: 0 5rem;
`;


const ListLink = props => (
  <StyledLink>
    <Link to={props.to}>{props.children}</Link>
  </StyledLink>
)

export default ({ children }) => (
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
    <h4 style={{ position: "absolute", bottom: "20px" }}>
      copyright whatever whoever
    </h4>
  </Wrapper>
)
