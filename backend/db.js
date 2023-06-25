const {  connect } = require("mongoose");

const connections=connect("mongodb://localhost:27017/segaclothe")

module.exports={connections}