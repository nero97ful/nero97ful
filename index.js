const { imageHash }= require('image-hash');
const hamming = require('hamming-distance');
require('dotenv').config();

const promiseNewImg = new Promise((resolve, reject) => {
  imageHash(process.env.IMG_A, 16, true, (error, data) => {
    if (error) 
      reject(error);
    resolve(data);
  });
});

const promiseCompImg = new Promise((resolve, reject) => {
  imageHash(process.env.IMG_B, 16, true, (error, data) => {
    if (error)
      reject(error);
    resolve(data); 
  });
});

Promise.all([promiseNewImg, promiseCompImg]).then(([dataNewImg, dataCompImg]) => {
  console.log(dataNewImg);
  console.log(dataCompImg);
  
  var similarity = hamming(Buffer.from(dataNewImg, 'hex'), Buffer.from(dataCompImg, 'hex')); 
  console.log(similarity);
});
