const { appendFile } = require("fs/promises")
const { join } = require("path")

const appendToFile = async (fileName, content) => {
    const filePath = join(__dirname, "files", fileName)
    try {
        await appendFile(filePath, content, "utf8")
        console.log(`Content appended to ${fileName}.`)
    } catch (err) {
        console.log(`Error occured: ${err}`)
    }
}

module.exports = { appendToFile }
