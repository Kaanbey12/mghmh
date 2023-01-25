const config = require("../../config.js");
const mongoose = require("mongoose")

module.exports = async (client) => {
    mongoose.connect(config.bot.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
    console.log("(!) Mongoose successfully connected.");
    }).catch(a => console.log("(!) An error occurred while connecting to Mongoose."));
}