const { readFile } = require("fs/promises")
const { join } = require("path")

const readFileContent = async (fileName) => {
    const filePath = join(__dirname, "files", fileName)
    try {
        const content = await readFile(filePath, "utf8")
        console.log(`\nContents of ${fileName}:\n${content}`)
    } catch (err) {
        console.log(`Could not read file: ${err.message}`)
    }
}

module.exports = { readFileContent }
