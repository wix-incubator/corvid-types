const fs = require("fs")
const path = require("path")

export function readLocalFile(filePath) {
    return fs.readFileSync(path.join("LOCAL_PATH", filePath))
}