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
  display: grid;
  grid-gap: 2rem;
  margin: 2rem 0 2rem 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`

const Tag = styled(GatsbyLink)`
  display: inline-block;
  padding: 1rem;
  background-color: ${props => props.theme.colors.scale_6};

  h2 {
    font-size: 1.6rem;
    transition: 0s;
  }

  :hover {
    background-color: ${props => props.theme.colors.scale_4};
    h2 {
      color: ${props => props.theme.colors.scale_6};
    }
  }
`
