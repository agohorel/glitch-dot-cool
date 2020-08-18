import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: auto;
    margin-bottom: 1.5rem;
  }
`

const VideoPlayer = props => {
  return (
    <VideoWrapper>
      <video controls>
        <source src={`https:${props.videoSrc}`} type="video/mp4" />
      </video>
    </VideoWrapper>
  )
}

export default VideoPlayer
