module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '536': '536px',
        '980': '980px',
        '468': '468px',
        '500': '500px'
      },
      boxShadow: {
        '3xl': '0px 0px 15px 3px rgba(0,0,0,0.75)',
        "4xl": '0px 0px 41px -15px rgba(0,0,0,0.62)'
      },
      inset: {
        '14px': '14px'
      },
      spacing: {
        '18px': '18px'
      },
      colors: {
        'red-be8': '#ffebe8'
      },
      fontSize: {
        '15px': '15px',
        '13px': '13px'
      },
      lineHeight: {
        '48px': '48px'
      }
    },
  },
  plugins: [],
};