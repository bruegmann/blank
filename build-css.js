const sass = require("sass")
const fs = require("fs")
const { version } = require("./package.json")

const file = "./dist/styles/scss/blank.scss"

// Set version in main SCSS file
let text = fs.readFileSync(file, { encoding: "utf8" })
text = text.replace(/v(\d+([.]\d+)*(-(beta|alpha|next)\.(\d+))?)/, `v${version}`)

fs.writeFileSync(file, text)

// Save uncompressed
const result = sass.renderSync({ file })
fs.writeFileSync("./dist/styles/css/blank.css", result.css)

// Save compressed
const compressedResult = sass.renderSync({ file, outputStyle: "compressed" })
fs.writeFileSync("./dist/styles/css/blank.min.css", compressedResult.css)