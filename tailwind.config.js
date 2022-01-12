module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    mode:'all',
    content:[
      './src/**/*.html',
      './src/**/*.css',
      './src/**/*.vue',
      './src/**/*.jsx',
    ]
  },
  theme: {
    container:{
      padding:'2rem',
      center: true,
    },
    extend: {
      colors:{
        'main':'#CE1212',
        "text":'#AAAAAA',
      }
    },
  },
}
