const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true },
phone: { type: Number, required: true },
address: { type: String, required: false }
}); 
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;