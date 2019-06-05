const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slugs = []

  if (node.internal.type === `ContentfulBlogPost`) {
    node.tags.forEach(tag => {
      slugs.push(slugify(tag))
    })
    createNodeField({
      node,
      name: `tagSlugs`,
      value: slugs,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // MAKE BLOG PAGES
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // get slug
  const blogResponse = await graphql(`
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
  blogResponse.data.allContentfulBlogPost.edges.forEach(post => {
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
      },
    })
  })

  // MAKE TAG PAGES
  const tagTemplate = path.resolve("./src/templates/tag.js")
  // get slug
  const tagResponse = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            tags
            fields {
              tagSlugs
            }
          }
        }
      }
    }
  `)
  // create new pages
  tagResponse.data.allContentfulBlogPost.edges.forEach(post => {
    post.node.fields.tagSlugs.forEach(tag => {
      createPage({
        component: tagTemplate,
        path: `/tags/${tag}`,
        context: {
          slug: tag,
        },
      })
    })
  })
}

const slugify = string => {
  const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;"
  const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------"
  const p = new RegExp(a.split("").join("|"), "g")

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}
