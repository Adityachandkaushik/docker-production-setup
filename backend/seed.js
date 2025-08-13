// seed.js
import mongoose from "mongoose";
import Student from "./models/studentModel.js"; // extension .js include karna zaruri

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("MongoDB connected for seeding");

  await Student.create([
    { name: "Aditya", course: "MERN" },
    { name: "Shreya", course: "DevOps" }
  ]);

  console.log("Sample data inserted ✅");
  mongoose.connection.close();
})
.catch(err => console.error(err));
