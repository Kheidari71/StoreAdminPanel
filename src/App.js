import React from "react";
import { Route, Routes } from "react-router-dom";
import { useThemeStore } from "./zustand/themeStore";
import { ToastContainer ,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from "./layout/auth/AuthLayout";
import AdminLayout from "./layout/admin/AdminLayout";


// export const handleError = (errorMessage) => {
//   toast.error(errorMessage || "An unexpected error occurred.");
// };

function App() {
  const { theme } = useThemeStore((state) => state); // Ensure theme is fetched properly

  return (
    <div className={theme}>
      {/* Toast Container for toasts notification*/}
      <ToastContainer 
        position="top-right" // Or "bottom-right", "top-center", etc.
        autoClose={3000}     // Auto-dismiss time in ms
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}          // Change to true for right-to-left languages
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="blue-toast"   // Apply the custom class      // Use "light" or "dark" as alternatives
      />
      <Routes>
        {/* Define your routes */}
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
}

export default App;
