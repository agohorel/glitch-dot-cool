import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { Filter } from "../components/Filter"
import { GatsbyLink, PageTitle } from "../utils/utilComponents"
import { slugify } from "../utils/utils"
import colors from "../styles/colors"

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const Tag = styled(GatsbyLink)`
  display: inline-block;
  width: calc(50% - 1rem);
  padding: 1rem;
  background-color: #fff;
  margin-top: 2rem;

  &:hover {
    background-color: ${colors.lightgrey};
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)

  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setfilterResult] = useState([])

  useEffect(() => {
    const result = data.allContentfulBlogPost.group.filter(tag =>
      tag.fieldValue.toLowerCase().includes(filterTerm.toLowerCase())
    )
    setfilterResult(result)
  }, [filterTerm])

  return (
    <Layout>
      <Head title="tags" />
      <PageTitle>tags</PageTitle>
      <Filter setFilterTerm={setFilterTerm} path="/posts" />
      <TagContainer>
        {filterResult.map(tag => {
          return (
            <Tag to={`/tags/${slugify(tag.fieldValue)}`} key={tag.fieldValue}>
              <h2>{tag.fieldValue}</h2>
            </Tag>
          )
        })}
      </TagContainer>
    </Layout>
  )
}

export default Tags
