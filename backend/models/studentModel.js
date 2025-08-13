import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  course: String
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
