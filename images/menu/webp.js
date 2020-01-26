const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['source/*.{jpg}'], {
  destination: __dirname + '/source/converted/',
  plugins: [
    imageminWebp({
      quality: 100,
      resize: {
        width: 1000,
        height: 0
      }
    })
  ]
}).then(() => {
  console.log('Images optimized');
});