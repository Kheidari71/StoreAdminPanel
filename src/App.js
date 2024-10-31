import React, { useState } from "react";

import AuthLayout from "./layout/auth/AuthLayout";
import AdminLayout from "./layout/admin/AdminLayout";
import { Route, Routes } from "react-router-dom";
import { useThemeStore } from "./zustand/themeStore";

function App() {

  

  const {theme} = useThemeStore((state) => state);



  return (
    <div className={theme}>

      <Routes>
        <Route path="/auth/*" element={<AuthLayout  />} />
        <Route path="/*" element={<AdminLayout  />} />
      </Routes>

    </div>
  );
}

export default App;
