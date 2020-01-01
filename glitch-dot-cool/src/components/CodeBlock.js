import React from "react"

const CodeBlock = ({ lang, code }) => {
  return (
    <pre className={`language-${lang}`}>
      <code className={`language-${lang}`} key={code.substring(0, 50)}>
        {code}
      </code>
    </pre>
  )
}

export default CodeBlock
