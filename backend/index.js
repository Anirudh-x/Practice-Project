require("dotenv").config()

// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// Local Files
const DBConnect = require("./config/db")

const coursesRoute = require("./routes/coursesRoute")
const authRoute = require("./routes/authRoute")
const authMiddleware = require("./middlewares/authMiddleware")

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

app.use(authMiddleware)

// Database
DBConnect()

// Routes
// app.use("/user", userRoute)
app.use("/admin/courses", coursesRoute)

app.use("/auth", authRoute)

// Server
app.listen(process.env.PORT, () => {
  console.log("Server is Running");
})