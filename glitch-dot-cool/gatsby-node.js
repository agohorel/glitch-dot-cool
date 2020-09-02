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

  if (node.internal.type === `ContentfulAuthor`) {
    createNodeField({
      node,
      name: `authorNameLowerCase`,
      value: node.authorName.toLowerCase(),
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // MAKE BLOG PAGES
  const blogTemplate = path.resolve("src/templates/blog.js")
  // get slug
  const blogResponse = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            author
          }
        }
      }
    }
  `)
  // create new pages
  blogResponse.data.allContentfulBlogPost.edges.forEach(post => {
    post.node.author.split(",").forEach(author => {
      createPage({
        component: blogTemplate,
        path: `/${slugify(author)}/${post.node.slug}`,
        context: {
          slug: post.node.slug,
        },
      })
    })
  })

  // MAKE TAG PAGES
  const tagTemplate = path.resolve("src/templates/tag.js")
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
    post.node.fields.tagSlugs.forEach((tag, i) => {
      createPage({
        component: tagTemplate,
        path: `/tags/${tag}`,
        context: {
          slug: tag,
          tag: post.node.tags[i],
        },
      })
    })
  })

  // MAKE AUTHOR PAGES
  const authorTemplate = path.resolve("src/templates/author.js")
  // get slug
  const authorResponse = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: author }) {
        group(field: author) {
          fieldValue
        }
      }
    }
  `)
  // create new pages
  authorResponse.data.allContentfulBlogPost.group.forEach(author => {
    createPage({
      component: authorTemplate,
      path: `${slugify(author.fieldValue)}/posts`,
      context: {
        author: author.fieldValue,
        regexTerm: `/${author.fieldValue}/`,
      },
    })
  })

  // MAKE GALLERY PAGES
  const galleryTemplate = path.resolve("src/templates/gallery.js")
  // get slug
  const authors = await graphql(`
    query {
      allContentfulAuthor {
        edges {
          node {
            authorName
          }
        }
      }
    }
  `)
  // create new pages
  authors.data.allContentfulAuthor.edges.forEach(author => {
    createPage({
      component: galleryTemplate,
      path: `${slugify(author.node.authorName)}/gallery`,
      context: {
        author: author.node.authorName,
      },
    })
  })

  // MAKE GALLERY DETAIL PAGES
  const galleryDetailTemplate = path.resolve("src/templates/galleryDetail.js")
  // get slug
  const allGalleryImgs = await graphql(`
    query {
      allContentfulGalleryItem {
        edges {
          node {
            contentful_id
            title
            author
          }
        }
      }
    }
  `)
  // create new pages
  allGalleryImgs.data.allContentfulGalleryItem.edges.forEach(img => {
    createPage({
      component: galleryDetailTemplate,
      path: `${slugify(img.node.author)}/gallery/${slugify(img.node.title)}`,
      context: {
        title: img.node.title,
        id: img.node.contentful_id,
        author: img.node.author,
      },
    })
  })

  // MAKE PROJECTS pages
  const projectTemplate = path.resolve("src/templates/project.js")
  // get slug
  const projectResponse = await graphql(`
    query {
      allContentfulProject(sort: { fields: publishedDate }) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  // create new pages
  projectResponse.data.allContentfulProject.edges.forEach(project => {
    createPage({
      component: projectTemplate,
      path: `projects/${project.node.slug}`,
      context: {
        project: project.node.title,
      },
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
