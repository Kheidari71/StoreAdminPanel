import React from 'react';
import { useThemeStore } from '../../../zustand/themeStore';

const DarkMode = () => {
  const {theme , setTheme} = useThemeStore((state) => state);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
   };

  return (
    <div>
      <label className="swap swap-rotate cursor-pointer">
        {/* Hidden checkbox controlling the theme */}
        <input
          type="checkbox"
          className="hidden"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />

        {/* Sun icon for dark mode */}
        <svg
          className={`swap-on fill-current  w-8 h-8 ${
            theme === 'light' ? 'hidden' : 'block'
        
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF" /* Bright gold color */
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>

        {/* Moon icon for light mode */}
        <svg
          className={`swap-off fill-current w-8 h-8 ${
            theme === 'dark' ? 'hidden' : 'block'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF" /* Pure white for visibility */
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </label>
    </div>
  );
};

export default DarkMode;
