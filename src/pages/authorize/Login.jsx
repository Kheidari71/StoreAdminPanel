import React, { useState } from "react";
import axios from "axios";
import DarkMode from "../../layout/admin/header/DarkMode";
import { Link, useNavigate } from "react-router-dom"; 
import { useThemeStore } from "../../zustand/themeStore";

const Login = () => {

  const {theme, setTheme} = useThemeStore((state) => state);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle the theme between 'dark' and 'light'
 
  
  const handleLogin = async () => {
    setLoading(true); // Start loading animation

    try {
      const loginData = { phone, password, remember: remember ? 1 : 0 };
      const response = await axios.post(
        "https://ecomadminapi.azhadev.ir/api/auth/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 && response.data.token) {
        console.log(response.data.token); // 
        
        localStorage.setItem("loginToken", response.data.token); 
        console.log(response);
        // alert("Login successful!");
        navigate("/"); // Redirect to the main page
      } else {
        alert(`Login failed: ${response.data?.message || "Unknown error."}`);
      }
    } catch (err) {
      console.error(err);

      if (err.response) {
        alert(`Login failed: ${err.response.data?.message || "Invalid credentials."}`);
      } else if (err.request) {
        alert("No response from the server. Please try again.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className={` ${theme === "dark" ? "dark" : ""}`}>
      <div
        className={`h-screen flex justify-center items-center ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold dark:text-gray-100">Login</h2>
            <DarkMode />
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page reload
              handleLogin();
            }}
          >
            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block mb-2 dark:text-gray-300">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-600 dark:text-white"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-2 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-600 dark:text-white"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 text-indigo-500 border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500 focus:ring-indigo-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm dark:text-gray-300">
                  Remember Me
                </label>
              </div>
              <Link to="#"                 className="text-sm text-indigo-500 hover:underline dark:text-indigo-400"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
