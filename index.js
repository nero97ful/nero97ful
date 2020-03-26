const { imageHash }= require('image-hash');
const imghash = require('imghash');
const hamming = require('hamming-distance');
require('dotenv').config();

const promiseNewImg = imghash.hash(process.env.IMG_A, 16);
const promiseCompImg = imghash.hash(process.env.IMG_B, 16);

Promise.all([promiseNewImg, promiseCompImg]).then(([dataNewImg, dataCompImg]) => {
  console.log(dataNewImg);
  console.log(dataCompImg);
  
  var similarity = hamming(Buffer.from(dataNewImg, 'hex'), Buffer.from(dataCompImg, 'hex')); 
  console.log(similarity);
});
