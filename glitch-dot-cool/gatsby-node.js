const path = require(`path`)

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
