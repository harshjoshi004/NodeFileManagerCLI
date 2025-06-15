const { writeFile } = require("fs/promises")
const { join } = require("path")

const overwriteFile = async (fileName, content) => {
    filePath = join(__dirname, "files", fileName)
    try {
        await writeFile(filePath, content, "utf8")
        console.log(`File ${fileName} overwritten`)
    } catch (err) {
        console.log(`Error occurred: ${err}`)
    }
}

module.exports = { overwriteFile }
