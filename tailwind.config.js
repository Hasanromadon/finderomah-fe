module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary' : '#0185FF',
        'orange-custom' : '#FF5050',
        'transparent-linear-blue' : 'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, #FAFDFF 100%);'
      },
      boxShadow: {
        'primary' : '0px 0px 40px 4px rgba(39, 125, 254, 0.15);'
      },
    },
  },
  plugins: [],
};
