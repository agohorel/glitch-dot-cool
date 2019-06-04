import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import colors from "../styles/colors"

const BlogPost = styled.div`
    margin-top: 2rem;
`

const BlogTags = styled.p`
    font-size: .8rem;
    color: ${colors.midgrey};
`

export const query = graphql`
    query (
        $slug: String!
    ) {
        markdownRemark (
            fields : {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
                date
                tags
            }
            html
        }
    }
` 

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <BlogPost dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></BlogPost>
            <BlogTags>{`tags: ${props.data.markdownRemark.frontmatter.tags}`}</BlogTags>
        </Layout>
    )
}

export default Blog;