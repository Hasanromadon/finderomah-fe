module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary' : '#0185FF',
        'blue-secondary' : '#00A3FF',
        'primary-light' : '#F9FDFF',
        'orange-custom' : '#FF5050',
        'transparent-linear-blue' : 'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, #FAFDFF 100%)'
      }, 
      boxShadow: {
        'primary' : '0px 0px 40px 4px rgba(39, 125, 254, 0.15)',
        'primary-lg' : '0px 4px 40px rgba(143, 190, 248, 0.637)'
      },
    },
  },
  plugins: [],
};
