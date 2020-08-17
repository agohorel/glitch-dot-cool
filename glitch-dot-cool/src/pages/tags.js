import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import { Filter } from "../components/Forms/Filter"
import { GatsbyLink, PageTitle } from "../utils/utilComponents"
import { slugify } from "../utils/utils"

const Tags = () => {
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setfilterResult] = useState([])

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)

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
  margin-top: 2rem;
  background-color: #fff;

  :hover {
    background-color: ${props => props.theme.colors.scale_2};
    color: ${props => props.theme.colors.scale_5};
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`
