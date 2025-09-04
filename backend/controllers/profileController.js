export const profile = (req, res) => {
  res.json({
    studentId: "220112460",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    department: "Computer Science",
    semester: 5,
    section: "A",
    address: "Dehradun, India"
  });
};

