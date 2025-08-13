import Student from "../models/studentModel.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().lean();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name, age, course } = req.body;
    const created = await Student.create({ name, age, course });
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

