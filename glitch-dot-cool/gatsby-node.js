const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// module.exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = createFilePath({ node, getNode, basePath: `posts` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // get path to template
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   // get slug
//   const response = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   // create new pages
//   response.data.allMarkdownRemark.edges.forEach(post => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog${post.node.fields.slug}`,
//       context: {
//         slug: post.node.fields.slug,
//       },
//     })
//   })
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // get slug
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // create new pages
  response.data.allContentfulBlogPost.edges.forEach(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
      },
    })
  })
}
