const { access, mkdir } = require("fs/promises")
const { join } = require("path")

const ensureDirectory = async () => {
    const dirPath = join(__dirname, "files")
    try {
        await access(dirPath)
    } catch (_) {
        await mkdir(dirPath)
    }
}

module.exports = { ensureDirectory }
