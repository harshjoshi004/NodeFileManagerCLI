const { copyFile: fsCopy } = require("fs/promises")
const { join } = require("path")

const copyFile = async (source, target) => {
    const srcPath = join(__dirname, "files", source)
    const destPath = join(__dirname, "files", target)
    try {
        await fsCopy(srcPath, destPath)
        console.log(`Copied ${source} to ${target}`)
    } catch (err) {
        console.log(`Copy failed: ${err.message}`)
    }
}

module.exports = { copyFile }
