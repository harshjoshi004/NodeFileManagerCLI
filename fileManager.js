const readline = require("readline")
const { createFile } = require("./createFile")
const { overwriteFile } = require("./overwriteFile")
const { appendToFile } = require("./appendToFile")
const { deleteFile } = require("./deleteFile")
const { listFiles } = require("./listAllFiles")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const ask = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const showMenu = async () => {
    while (true) {
        console.log("\n---> Harsh Joshi's Node File Manager <---")
        console.log("1. Create File")
        console.log("2. Overwrite File")
        console.log("3. Append to File")
        console.log("4. Delete File")
        console.log("5. List All Files")
        console.log("6. Exit")

        const choice = await ask("Enter your choice: ")

        switch (choice.trim()) {
            case "1":
                var name = await ask("Enter file name: ")
                var content = await ask("Enter file content: ")
                await createFile(name, content)
                break

            case "2":
                var name = await ask("Enter file name: ")
                var content = await ask("Enter new content: ")
                await overwriteFile(name, content)
                break

            case "3":
                var name = await ask("Enter file name: ")
                var content = await ask("Enter content to append: ")
                await appendToFile(name, content)
                break

            case "4":
                var name = await ask("Enter file name to delete: ")
                await deleteFile(name)
                break

            case "5":
                await listFiles()
                break

            case "6":
                console.log("Exiting.")
                rl.close()
                return

            default:
                console.log("Invalid choice.")
        }
    }
}

showMenu()
