const { readdir } = require("fs/promises")
const { join } = require("path")

const listFiles = async () => {
    const basePath = join(__dirname, "files")
    try {
        const result = await readdir(basePath)
        if (result.length === 0) console.log(`Directory is empty.`)
        result.forEach((file) => console.log(`--> ${file}`))
    } catch (err) {
        console.log(`Error occured: ${err}`)
    }
}

module.exports = { listFiles }
