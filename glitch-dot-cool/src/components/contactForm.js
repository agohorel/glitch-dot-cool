import React from "react"
import styled from "styled-components"

import { Centered, StyledButton, PageTitle } from "../utils/utilComponents"
import colors from "../styles/colors"

const StyledForm = styled.form`
  width: 75%;
  margin-top: 3rem;

  @media only screen and (min-width: 900px){
    width: 50%;
  }
`

const FormInput = styled.input`
  display: block;
  border: none;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  transition: 0.2s ease all;

  :focus {
    outline: none;
    border-bottom: 3px solid ${colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${colors.invalid};
  }
`

const FormTextArea = styled.textarea`
  display: block;
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: 0.2s ease all;
  resize: none;

  :focus {
    outline: none;
    border-bottom: 3px solid ${colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${colors.invalid};
  }
`

const FormSubmit = StyledButton.withComponent("input")

const FormGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`

const ContactForm = () => {
  return (
    <Centered>
      <StyledForm action="https://formspree.io/info@glitch.cool" method="POST">
        <PageTitle>contact</PageTitle>
        <FormGroup>
          <label htmlFor="name">name</label>
          <FormInput type="text" name="name" required />
        </FormGroup>

        <FormGroup>
          <label htmlFor="_replyto">email</label>
          <FormInput type="email" name="_replyto" required />
        </FormGroup>

        <FormGroup>
          <label htmlFor="body">message</label>
          <FormTextArea type="text" name="body" rows="6" required />
        </FormGroup>

        <FormGroup>
          <FormSubmit type="submit" value="Send Message" />
        </FormGroup>
      </StyledForm>
    </Centered>
  )
}

export default ContactForm
