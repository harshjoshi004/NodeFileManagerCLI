const readline = require("readline")
const { ensureDirectory } = require("./ensureDirectory")
const { ask } = require("./ask")
const { createFile } = require("./createFile")
const { overwriteFile } = require("./overwriteFile")
const { appendToFile } = require("./appendToFile")
const { deleteFile } = require("./deleteFile")
const { listFiles } = require("./listAllFiles")
const { readFileContent } = require("./readFileContent")
const { renameFile } = require("./renameFile")
const { copyFile } = require("./copyFile")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const main = async () => {
    await ensureDirectory()

    while (true) {
        console.log("\n---> Harsh Joshi's Node File Manager <---")
        console.log(
            "1. Create File\n2. Overwrite File\n3. Append to File\n4. Delete File\n5. List Files\n6. Read File\n7. Rename File\n8. Copy File\n9. Exit"
        )

        const choice = await ask(rl, "Enter your choice: ")

        switch (choice.trim()) {
            case "1": {
                const name = await ask(rl, "Enter file name: ")
                const content = await ask(rl, "Enter file content: ")
                await createFile(name, content)
                break
            }
            case "2": {
                const name = await ask(rl, "Enter file name: ")
                const content = await ask(rl, "Enter new content: ")
                await overwriteFile(name, content)
                break
            }
            case "3": {
                const name = await ask(rl, "Enter file name: ")
                const content = await ask(rl, "Enter content to append: ")
                await appendToFile(name, content)
                break
            }
            case "4": {
                const name = await ask(rl, "Enter file name to delete: ")
                await deleteFile(name)
                break
            }
            case "5":
                await listFiles()
                break
            case "6": {
                const name = await ask(rl, "Enter file name to read: ")
                await readFileContent(name)
                break
            }
            case "7": {
                const oldName = await ask(rl, "Enter current file name: ")
                const newName = await ask(rl, "Enter new file name: ")
                await renameFile(oldName, newName)
                break
            }
            case "8": {
                const source = await ask(rl, "Enter source file name: ")
                const target = await ask(rl, "Enter target file name: ")
                await copyFile(source, target)
                break
            }
            case "9":
                console.log("Exiting File Manager.")
                rl.close()
                return
            default:
                console.log("Invalid choice.")
        }
    }
}

main()
