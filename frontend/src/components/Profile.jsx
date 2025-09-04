import { useState, useEffect } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile/",{
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
        if (!response.ok) throw new Error("Failed to fetch profile");
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div className="p-4 text-gray-600">Loading profile...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Student Profile</h2>
      <p><span className="font-semibold">ID:</span> {profile.id}</p>
      <p><span className="font-semibold">Name:</span> {profile.name}</p>
      <p><span className="font-semibold">Email:</span> {profile.email}</p>
      <p><span className="font-semibold">Course:</span> {profile.course}</p>
      <p><span className="font-semibold">Attendance:</span> {profile.attendance}%</p>
    </div>
  );
}

export default Profile;
