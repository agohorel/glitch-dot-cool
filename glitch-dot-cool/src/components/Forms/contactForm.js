import React from "react"
import styled from "styled-components"

import { Centered, StyledButton, PageTitle } from "../../utils/utilComponents"

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

const StyledForm = styled.form`
  width: 75%;
  margin-top: 6rem;

  label {
    color: ${props => props.theme.colors.scale_1};
  }

  input,
  textarea {
    display: block;
    padding: 1rem 1rem;
    border: none;
    color: ${props => props.theme.colors.scale_1};
    transition: 0.2s ease all;
  }

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
`

const FormInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.scale_6};
  border: none;
  font-size: 2.4rem;

  :focus {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.invalid};
  }
`

const FormTextArea = styled.textarea`
  width: 100%;
  background-color: ${props => props.theme.colors.scale_6};
  font-size: 2rem;
  resize: none;

  :focus {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.invalid};
  }
`

const FormSubmit = StyledButton.withComponent("input")

const FormGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`
