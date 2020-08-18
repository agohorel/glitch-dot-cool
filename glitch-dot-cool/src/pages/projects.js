import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProjectsList from "../components/Projects/ProjectsList"

const Projects = () => {
  const projects = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do YYYY")
            artwork {
              title
              file {
                url
                fileName
              }
              fluid(maxWidth: 250) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return <ProjectsList projects={projects.allContentfulProject.edges} />
}

export default Projects
