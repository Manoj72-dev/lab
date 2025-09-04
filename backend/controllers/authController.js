
const demoStudent = {
  studentId: "220112460",
  password: "@Manoj000?",
  name: "Manoj Chauhan",
  role: "student"
};


export const login = async (req, res) => {
  try {
    const { studentId, password } = req.body;

    
    if (!studentId || !password) {
      return res.status(400).json({ message: "Student ID and password are required" });
    }

    if (studentId === demoStudent.studentId && password === demoStudent.password) {
      return res.status(200).json({
        message: "Login successful",
        student: {
          id: demoStudent.studentId,
          name: demoStudent.name,
          role: demoStudent.role,
        },
        token: "demo-jwt-token" 
      });
    } else {
      return res.status(401).json({ message: "Invalid student ID or password" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

