require('dotenv').config();
const mongoose = require("mongoose");

const connecttomongo = () => {
  mongoose.connect(process.env.MONGODB_URI, { keepAlive: true }, () =>
    console.log("Connected to mongo succesfully")
  );
};

module.exports = connecttomongo;
