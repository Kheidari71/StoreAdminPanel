import { create } from 'zustand'



// Create your store, which includes both state and (optionally) actions
export const useUserInfoStore = create((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({userInfo}),
}))


// type Action = {
//   setShowMenu: (showMenu: State['showMenu']) => void
//   toggleShowMenu: () => void
// }

//menu is open or not///

// const [showMenu, setShowMenu] =useState()

// setShowMenu((old)=>!old)

