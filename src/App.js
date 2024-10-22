import React, { useState } from "react";

import AuthLayout from "./layout/auth/AuthLayout";
import AdminLayout from "./layout/admin/AdminLayout";
import { Route, Routes } from "react-router-dom";
import { useThemeStore } from "./zustand/themeStore";

function App() {

  const [theme1, setteme1] = useState("light");

  const {theme, setTheme} = useThemeStore((state) => state);



  return (
    <div className={theme}>

      <Routes>
        <Route path="/auth/*" element={<AuthLayout theme={theme1} setteme={(t) => setteme1(t)} />} />
        <Route path="/*" element={<AdminLayout theme={theme1} setteme={(t) => setteme1(t)} />} />
      </Routes>

    </div>
  );
}

export default App;
