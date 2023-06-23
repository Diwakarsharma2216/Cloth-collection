const {  connect } = require("mongoose");

const connections=connect("mongodb://localhost:27017")

module.exports={connections}