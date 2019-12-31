import React from "react"

const CodeBlock = ({ text, lang, code }) => {
  return (
    <pre className={`language-${lang}`} key={`${text.substring(0, 10)}-pre`}>
      <code
        className={`language-${lang}`}
        key={`${text.substring(0, 10)}-codeblock`}
      >
        {code}
      </code>
    </pre>
  )
}

export default CodeBlock