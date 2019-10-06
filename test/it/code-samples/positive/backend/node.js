import wixStores from "wix-stores-backend"
const fs = require("fs")
const path = require("path")
export function getCurrentCart() {
    return wixStores.getCurrentCart();
}

export function getTestBufferBigInt64BE() {
    const b = new Buffer("testooo")
    return b.readBigInt64BE()
}

export function readLocalFile(filePath) {
    return fs.readFileSync(path.join("LOCAL_PATH", filePath))
}