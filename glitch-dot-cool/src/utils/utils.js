import React from "react"
import "prismjs/themes/prism-coy.css"
import Prism from "prismjs"
import convert from "react-attr-converter"
import CSSJSON from "cssjson"
import Image from "gatsby-image"

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
    "embedded-asset-block": node => {
      return <Image fluid={node.img}></Image>
    },
    // setup for styling code blocks
    paragraph: node => {
      if (typeof window !== `undefined`) {
        setTimeout(() => {
          Prism.highlightAll()
        }, 200)
      }

      return node.content.map(contentItem => {
        if (contentItem.marks.length && contentItem.marks[0].type === "code") {
          // pull out language specified as first line of code block to set language
          let lang = contentItem.value.split("\n")[0].trim()
          // remove language declaration from actual code block
          let code = contentItem.value.replace(lang, "").trim()
          return (
            <pre
              className={`language-${lang}`}
              key={`${contentItem.value.substring(0, 10)}-pre`}
            >
              <code
                className={`language-${lang}`}
                key={`${contentItem.value.substring(0, 10)}-codeblock`}
              >
                {code}
              </code>
            </pre>
          )
        } else if (
          contentItem.nodeType === `text` &&
          contentItem.value.substring(0, 7).includes(`<iframe`)
        ) {
          if (typeof window !== `undefined`) {
            let doc = new DOMParser().parseFromString(
              contentItem.value,
              `text/html`
            )
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
          } else {
            return null
          }
        } else {
          return (
            <p key={contentItem.value.substring(0, 10)}>{contentItem.value}</p>
          )
        }
      })
    },
  },
}

export { slugify, activeNavStyles, renderOptions }
