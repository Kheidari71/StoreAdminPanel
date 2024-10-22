/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {//prefix ex:app_...
      colors: {
        'bg_icon_pink': "#FFE0EB",
        'icon_pink': "#FF82AC",
        'bg_icon_blue': "#F5F7FA",
        'icon_blue': "#718EBF",
        'bg_icon_green': "#DCFAF8",
        'icon_green': "#16DBCC",
        'bg_icon_orange': "#FFF5D9",
        'icon_orange': "#FFBB38",
        'menu_item_mute': "#B1B1B1",
        'menu_subItem': "#9F9F9F",
        'menu_item_on': "#1814F3",
        'pageName': "#343C6A",
        'main_font': "#232323",
        'card&table': '#718EBF'
      },
      fontSize: {
        'dashboarditem_cardPrice': '12pt',
        'cardtTitle_ChartPrice_TableTitle_TableContent': '9pt'
      },
      fontWeight: {
        'dashboarditem': '500',
        'cardtTitle': '400',
        'cardPrice_mainTitles': '600',
        'tableTitle': '500',
        'tableContent': '400'
      },
      spacing: {
        'dashboard_icon_size_1': '20px',
        'card&Nav_icon_size': '18px',
        'card_icon_bg_size': '45px',
        'nav_icon_bg_size': '40px',
        'custom_sidebar_width': '256px',
        'custom_navbar_height': '85px',
        'custom_restof_sidebar_width': 'calc(100% - 256px)'
      },
      animation: {
        'custom_slide_down': 'custom_slide_down 0.2s ease backwards'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


//   /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       spacing:{
//         'custom_icon_size_1' : '24px',
//         'custom_table_icon_size' : '22px',
//         'custom_sidebar_width' : '350px',
//         'custom_navbar_height' : '80px',
//         'custom_restof_sidebar_width' : 'calc(100% - 350px)'
//       },
//       fontSize: {
//         'custom_size_0' : '9pt',
//         'custom_size_1' : '10pt',
//         'custom_size_2' : '12pt'
//       },
//       colors: {
//         'custom_light_10': '#ffffff',
//         'custom_light_20': '#f4f7ff',
//         'custom_light_30' : '#D9D9D9',
//         'custom_light_35' : '#BFBDD3',
//         'custom_light_40' : '#D6E1FF',
//         'custom_light_50' : '#ECF0FF',
//         'custom_gray_10' : '#C8C7DC',
//         'custom_gray_15' : '#F4F3FF',
//         'custom_gray_20' : '#A8A8BF',
//         'custom_gray_25' : '#676c8e',
//         'custom_gray_30':  '#525e6e',
//         'custom_gray_35':  '#394556',
//         'custom_gray_40':  '#394556',
//         'custom_gray_50' : '#444c65',
//         'custom_dark_10':  '#1f2937',
//         'custom_blue_5' : '#7aa7f2',
//         'custom_blue_10' : '#357CF0',
//         'custom_blue_20' : '#1A46F9',
//         'custom_red_10' : '#FF5555',
//         'custom_green_10' : '#1AD178',
//       },
//       borderRadius: {
//         'custom_primary' : '17px',
//         'custom_secondary' : '13px',
//         'custom_20' : '20px',
//         'custom_7' : '7px',
//       },
//       keyframes :{
//         custom_slide_down : {
//           '0%' : { transform: 'scaleY(0)' }
//         }
//       },
//       animation : {
//         custom_slide_down: 'custom_slide_down 0.2s ease backwards'
//       }
//     },
//   },
//   plugins: [require("daisyui")],
// }