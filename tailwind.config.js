module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // custom width
      width: {
        536: '536px',
        980: '980px',
        468: '468px',
        500: '500px',
        432: '432px',
        170: '170px',
        '9/10': '90%',
      },
      // custom height
      height: {
        450: '450px',
      },
      // custom box-shadow
      boxShadow: {
        '3xl': '0px 0px 15px 3px rgba(0,0,0,0.75)',
        '4xl': '0px 0px 41px -15px rgba(0,0,0,0.62)',
        register: '0px 0px 12px 4px rgba(0,0,0,0.09)',
      },
      // custom top-bottom-left-right
      inset: {
        '14px': '14px',
        '72px': '72px',
        '18px': '18px',
      },
      // custom padding,margin
      spacing: {
        '18px': '18px',
        '10px': '10px',
        '11px': '11px',
      },
      // custom color
      colors: {
        'red-be8': '#ffebe8',
        770: '#606770',
        e21: '#1c1e21',
      },
      fontSize: {
        '15px': '15px',
        '13px': '13px',
      },
      lineHeight: {
        '48px': '48px',
      },
    },
  },
  plugins: [],
};
