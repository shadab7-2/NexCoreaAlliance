const mongoose = require('mongoose');

/*
==================================
   STUDENT SCHEMA (Structure)
==================================

A schema defines the shape of the data.
Example fields: name, age, email, course
*/

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,   // Name is mandatory
      trim: true        // Removes extra spaces
    },
    password: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,     // No two students can have the same email
      lowercase: true
    },
    course: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt
  }
);

// Exporting the model to use in controllers
module.exports = mongoose.model("Student", studentSchema);
