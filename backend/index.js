const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())


const url = "mongodb+srv://admin:admin@cluster0.7oowxoc.mongodb.net/Elearning?appName=Cluster0"

const DBConnect = async () => {
  await mongoose.connect(url)
  console.log("Connected to DB");
}

DBConnect()

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    require: true
  },
  level: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  duration: {
    type: String,
    required: true
  }
});

const Course = mongoose.model("Course", courseSchema);


app.get("/", (req, res) => {
  res.send("Server is Live")
})

// ==========================================

// CRUD

// For Getting the Data
app.get("/admin/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// For Posting the Data
app.post("/admin/courses", async (req, res) => {

  const course = await Course.create({
    title: req.body.title,
    duration: req.body.duration,
    category: req.body.category,
    level: req.body.level,
    price: req.body.price
  });

  res.send("Data Saved")
})

// For Replacing the Data

app.put("/admin/courses/:id", async (req, res) => {

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      duration: req.body.duration,
      category: req.body.category,
      level: req.body.level,
      price: req.body.price
    }
  );

  res.send("Updated Successfully")
})

// For Modifing the Data

app.patch("/admin/courses/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.send("Modified Successfully")
})

// For Deleting the Data

app.delete("/admin/courses/:id", async (req, res) => {

  await Course.findByIdAndDelete(req.params.id);

  res.send("Deleted Successfully")
})




// ==========================================


app.listen(PORT, () => {
  console.log("Server is Running");
})