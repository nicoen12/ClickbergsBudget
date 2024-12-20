import { Parser } from "./parse.js"

class Categoriser {
    constructor() {

    }
    categorise(fieldValueObj) {

    }
}

class Profile {
    #categoryNames = []
    #fieldNames = []
    #dataEntries = []

    constructor(fields, categories=null) {
        this.#fieldNames = fields
        this.#categoryNames = categories ? categories : ["Groceries", "Clothes", "Recurring", "Salary", "Misc", "Hidden"]
        this.parser = new Parser()
    }

    addFieldName(field) {
        this.#fieldNames.push(field)
    }

    addCategory(category) {
        if (this.#categoryNames.includes(category)) throw new Error("Category already exists!")
        this.#categoryNames.push(category)
    }

    handleFile(file) {
        this.parser.handleFile(file)
    }
}

export { Profile }