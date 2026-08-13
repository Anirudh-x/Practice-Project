const mongoose = require("mongoose")

const DBConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  console.log("Connected to DB");
}


module.exports = DBConnect