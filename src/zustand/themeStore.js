import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },
  theme: localStorage.getItem('theme') || 'light',
}));


//zustand structure