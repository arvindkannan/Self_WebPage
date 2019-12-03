//import { resolve as _resolve } from "path"
const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path._resolve(__dirname, "src"), "node_modules"],
    },
  })
}
