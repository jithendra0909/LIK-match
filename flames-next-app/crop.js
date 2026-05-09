const sharp = require('sharp');

async function processImage() {
  try {
    await sharp('src/app/opengraph-image.jpg')
      .resize(1200, 630, {
        fit: 'cover',
        position: 'top' // This will keep the top part (logo and faces) and crop the bottom
      })
      .toFile('src/app/opengraph-image-cropped.jpg');
      
    console.log('Image perfectly cropped and resized for WhatsApp!');
  } catch (error) {
    console.error('Error:', error);
  }
}

processImage();
