import React from "react"
import styled from "styled-components"

import { GatsbyLink, StyledButton } from "../utils/utilComponents"
import colors from "../styles/colors"

export const Filter = ({ setFilterTerm, path }) => {
  return (
    <FormWrapper>
      <Form>
        <Label htmlFor="filter">filter: </Label>
        <Input id="filter" onChange={e => setFilterTerm(e.target.value)} />
      </Form>
      <GatsbyLink to={path}>
        <StyledButton>view all {path.substring(1, path.length)}</StyledButton>
      </GatsbyLink>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${colors.white};
  align-items: center;
`

const Form = styled.form`
  flex-grow: 1;
  margin-right: 2rem;
  font-family: "Roboto", sans-serif;
`

const Label = styled.label`
  font-size: 1.2rem;
  color: ${colors.darkgrey};
`

const Input = styled.input`
  border: none;
  padding: 3px;
  background-color: ${colors.lightgrey};
  color: ${colors.darkgrey};
`
