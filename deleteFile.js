const { unlink } = require("fs/promises")
const { join } = require("path")

const deleteFile = async (fileName) => {
    const filePath = join(__dirname, "files", fileName)
    try {
        await unlink(filePath)
        console.log(`File ${fileName} deleted.`)
    } catch (err) {
        console.log(`Error occured: ${err}`)
    }
}

module.exports = { deleteFile }
