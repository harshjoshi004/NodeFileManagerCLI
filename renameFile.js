const { rename } = require("fs/promises")
const { join } = require("path")

const renameFile = async (oldName, newName) => {
    const oldPath = join(__dirname, "files", oldName)
    const newPath = join(__dirname, "files", newName)
    try {
        await rename(oldPath, newPath)
        console.log(`Renamed ${oldName} to ${newName}`)
    } catch (err) {
        console.log(`Rename failed: ${err.message}`)
    }
}

module.exports = { renameFile }
