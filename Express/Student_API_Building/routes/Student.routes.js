const express = require("express");
const router = express.Router();

// Importing controller functions
const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../controllers/Student.controller");

/*
==================================
           API ROUTES
==================================
Base URL: /api/students
*/

// ➕ Add student
router.post("/", addStudent);

// 📄 Get all students
router.get("/", getStudents);

// 🔍 Get single student by ID
router.get("/:id", getStudentById);

// ✏️ Update student by ID
router.put("/:id", updateStudent);

// 🗑 Delete student by ID
router.delete("/:id", deleteStudent);

module.exports = router;
