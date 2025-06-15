const { access, writeFile } = require("fs/promises")
const { join } = require("path")

console.log("print1 ")

const createFile = async (fileName, content) => {
    const filePath = join(__dirname, "files", fileName)
    try {
        await access(filePath)
        console.log(`File ${fileName} already exists.`)
    } catch (err) {
        await writeFile(filePath, content, "utf8")
        console.log(`File does not exist. So, created new file.`)
    }
}

module.exports = { createFile }
