import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import { GatsbyLink, PageTitle } from "../utils/utilComponents"
import { Filter } from "../components/Forms/Filter"
import { slugify, parseAuthorLinks } from "../utils/utils"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            author
          }
        }
      }
    }
  `)

  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setfilterResult] = useState([])

  useEffect(() => {
    const result = data.allContentfulBlogPost.edges.filter(post =>
      post.node.title.toLowerCase().includes(filterTerm.toLowerCase())
    )
    setfilterResult(result)
  }, [filterTerm])

  return (
    <Layout>
      <Head title="posts" />
      <PageTitle>posts</PageTitle>
      <Filter setFilterTerm={setFilterTerm} path="/tags" />
      {filterResult.map(post => {
        const authors = parseAuthorLinks(post.node.author)
        return (
          <Post key={post.node.title}>
            <GatsbyLink to={`/${slugify(authors[0].name)}/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
              <p style={{ display: "inline" }}>{`by `}</p>

              {authors.map((author, idx) => {
                if (idx < authors.length - 1) {
                  return (
                    <GatsbyLink to={author.slug}>
                      <strong>{author.name},</strong>
                    </GatsbyLink>
                  )
                } else {
                  return (
                    <GatsbyLink to={author.slug}>
                      <strong>{author.name}</strong>
                    </GatsbyLink>
                  )
                }
              })}
            </GatsbyLink>
          </Post>
        )
      })}
    </Layout>
  )
}

export default Posts

const Post = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.scale_6};
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }

  :hover {
    background-color: ${props => props.theme.colors.scale_3};
  }
`
