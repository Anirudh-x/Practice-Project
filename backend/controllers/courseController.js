const Course = require("../models/course.model");

const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
}

const createCourse = async (req, res) => {
  const course = await Course.create({
    title: req.body.title,
    duration: req.body.duration,
    category: req.body.category,
    level: req.body.level,
    price: req.body.price
  });

  res.send("Data Saved")
}

const updateCourse = async (req, res) => {
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
}

const modifyCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.send("Modified Successfully")
}

const deleteCourse = async (req, res) => {

  await Course.findByIdAndDelete(req.params.id);

  res.send("Deleted Successfully")
}


module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  modifyCourse,
  deleteCourse
}