const express = require("express");
const {
  getCourses,
  createCourse,
  updateCourse,
  modifyCourse,
  deleteCourse
} = require("../controllers/courseController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


router.get("/", getCourses);
router.post("/", authMiddleware, createCourse)
router.put("/:id", updateCourse)
router.patch("/:id", modifyCourse)
router.delete("/:id", deleteCourse)


module.exports = router;