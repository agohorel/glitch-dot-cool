import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Head from "../components/Layout/head"
import { GatsbyLink, PageTitle } from "../utils/utilComponents"
import { Filter } from "../components/Forms/Filter"
import { slugify } from "../utils/utils"

const Posts = () => {
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setfilterResult] = useState([])

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
        return (
          <Post key={post.node.title}>
            <GatsbyLink to={`/${slugify(post.node.author)}/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
            </GatsbyLink>
            <p>{post.node.publishedDate}</p>
            {`by `}
            <GatsbyLink to={`/${slugify(post.node.author)}/posts`}>
              <strong>{post.node.author}</strong>
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
  background-color: #fff;
  margin-top: 2rem;

  :last-child {
    margin-bottom: 2rem;
  }
`
