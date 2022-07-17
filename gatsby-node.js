const path = require("path")
const fetch = require("node-fetch")
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const response = JSON.parse(JSON.stringify(require("./src/trek_data.json")));
  response.forEach(node => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour_page_template.js"),
      context: {
        slug: node.slug,
        ...node,
      },
    })
  })
}
