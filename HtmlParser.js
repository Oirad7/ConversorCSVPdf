const { table } = require("console");
var ejs = require("ejs");
const { parse } = require("path");

class HtmlParser{
    static async Parse(table){
        return await ejs.renderFile("./table.ejs",{header: table.header, rows: table.rows})
    }

}

module.exports = HtmlParser;