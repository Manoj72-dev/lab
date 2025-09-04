import React, { useState , useContext} from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";

export default function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [capsLock, setCapsLock] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const isFormValid = studentId.trim() !== "" && password.trim() !== "";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, password }),
      });

      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem("student", JSON.stringify(data.student));
        sessionStorage.setItem("token", data.token);
        
        setMessage("✅ Login successful!");
        setTimeout(() => navigate("/home"), 1000);
        login(data.student); 
      } else {
        setMessage("❌ " + (data.message || "Invalid credentials"));
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("⚠️ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCapsLock = (e) => {
    setCapsLock(e.getModifierState("CapsLock"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 relative font-sans px-4 overflow-hidden">
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl -z-10"
        animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 opacity-25 blur-3xl -z-10"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-20 blur-3xl -z-10"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[540px] rounded-3xl overflow-hidden shadow-2xl relative z-10"
      >
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <img
            src="/img/img.png"
            alt="University Campus"
            className="w-full h-full object-cover filter brightness-75 grayscale"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white drop-shadow-md"
            >
              Welcome to Campus Life,
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white drop-shadow-md"
            >
              Empowering Students
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-gray-800/70 backdrop-blur-xl border border-gray-700/50 p-10 flex flex-col justify-center text-gray-100 rounded-r-3xl">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-gray-300" />
              Student Portal Login
            </h2>
            <p className="text-gray-300 text-sm">
              Don’t have an account? Contact Admin
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />

            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={handleCapsLock}
                className="w-full p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-300 hover:text-white transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {capsLock && (
                <p className="text-xs text-yellow-400 mt-1">
                  ⚠️ Caps Lock is ON
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-center">
              <button
                type="button"
                className="text-sm text-gray-300 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: isFormValid ? 1.05 : 1 }}
              whileTap={{ scale: isFormValid ? 0.95 : 1 }}
              disabled={!isFormValid || loading}
              className={`w-full py-4 rounded-xl font-semibold transition flex items-center justify-center gap-3 ${
                isFormValid
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 cursor-pointer"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-gray-200 border-t-transparent rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                  />
                  Authenticating...
                </>
              ) : (
                "Login"
              )}
            </motion.button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm font-medium">{message}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
