import React from "react"
import "prismjs/themes/prism-coy.css"
import Prism from "prismjs"
import convert from "react-attr-converter"
import CSSJSON from "cssjson"
import Image from "gatsby-image"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

import {
  StyledLink,
  BlogImageWrapper,
  BlogImageContainer,
  BlogImageSubtitle,
} from "../utils/utilComponents"

import VideoPlayer from "../components/videoPlayer"
import AudioPlayer from "../components/audioPlayer"

const slugify = string => {
  const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;"
  const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------"
  const p = new RegExp(a.split("").join("|"), "g")

  return (
    string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      // eslint-disable-next-line
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      // eslint-disable-next-line
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "") // Trim - from end of text
  )
}

const activeNavStyles = {
  textDecoration: "line-through",
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (node.data.target.fields.file["en-US"].contentType.includes("video")) {
        return (
          <VideoPlayer videoSrc={node.data.target.fields.file["en-US"].url} />
        )
      } else if (
        node.data.target.fields.file["en-US"].contentType.includes("audio")
      ) {
        return (
          <AudioPlayer audioSrc={node.data.target.fields.file["en-US"].url} />
        )
      } else {
        return (
          <BlogImageWrapper>
            <BlogImageContainer>
              <Image fluid={node.img} />
            </BlogImageContainer>
          </BlogImageWrapper>
        )
      }
    },
    [BLOCKS.HEADING_6]: text => {
      return <BlogImageSubtitle>{text.content[0].value}</BlogImageSubtitle>
    },
    [INLINES.HYPERLINK]: link => {
      return (
        <StyledLink
          style={{ textDecoration: `underline` }}
          href={link.data.uri}
          target={`_blank`}
        >
          {link.content[0].value}
        </StyledLink>
      )
    },
  },
  renderMark: {
    [MARKS.CODE]: text => {
      // render iframes
      if (text.substring(0, 7).includes(`<iframe`)) {
        if (typeof window !== `undefined`) {
          let doc = new DOMParser().parseFromString(text, `text/html`)
          let iframeAttributes =
            doc.childNodes[0].childNodes[1].childNodes[0].attributes
          let embed = {}

          for (var i = 0; i < iframeAttributes.length; i++) {
            var attrib = iframeAttributes[i]
            if (attrib.name === "style") {
              let styleObject = CSSJSON.toJSON(attrib.value).attributes
              embed[convert(attrib.name)] = styleObject
            } else {
              embed[convert(attrib.name)] = attrib.value
            }
          }
          return <iframe title={embed.class} key={embed.src} {...embed} />
        }
      }
      // render code blocks
      else {
        if (typeof window !== `undefined`) {
          setTimeout(() => {
            Prism.highlightAll()
          }, 200)
        }
        // pull out language specified as first line of code block to set language
        let lang = text.split("\n")[0].trim()
        // remove language declaration from actual code block
        let code = text.replace(lang, "").trim()
        return (
          <pre
            className={`language-${lang}`}
            key={`${text.substring(0, 10)}-pre`}
          >
            <code
              className={`language-${lang}`}
              key={`${text.substring(0, 10)}-codeblock`}
            >
              {code}
            </code>
          </pre>
        )
      }
    },
  },
}

export { slugify, activeNavStyles, renderOptions }
