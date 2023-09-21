import Admin from "@/models/admin.model";
import Student from "@/models/student.models"

export const createAdmin =async (req, res) => {
  const {fullname,mobile,email,password } = req.body;
  try {
   const admin = new Admin({
    fullname,mobile,email,password
   });
   await admin.save();
   res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Not Register" });
  }
};

export const getallstudents = async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({message: "Not getting all students"});
  }
};
