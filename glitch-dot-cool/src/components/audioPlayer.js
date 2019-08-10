import React from "react"
import styled from "styled-components"

import colors from "../styles/colors"

const AudioWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  audio {
    display: block;
    background-color: #EEE;
    width: 75%;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, .2);
  }
`

const AudioPlayer = props => {
  return (
    <AudioWrapper>
      <audio controls>
        <source src={`https:${props.audioSrc}`} type="audio/mpeg" />
      </audio>
    </AudioWrapper>
  )
}

export default AudioPlayer
