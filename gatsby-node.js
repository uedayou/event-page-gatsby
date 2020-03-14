const path = require("path")
const fs = require("fs")

// https://github.com/gatsbyjs/gatsby/issues/18975#issuecomment-591403950
/*
exports.onPostBuild = () => {
  fs.renameSync(
    path.join(__dirname, "public"),
    path.join(__dirname, "docs")
  )
}
*/