const { imageHash }= require('image-hash');
var stringSimilarity = require('string-similarity');

const promiseNewImg = new Promise((resolve, reject) => {
  imageHash('D:\\Desktop\\Memehub bot\\1.png', 32, true, (error, data) => {
    if (error) 
      reject(error);
    resolve(data);
  });
});

const promiseCompImg = new Promise((resolve, reject) => {
  imageHash('D:\\Desktop\\Memehub bot\\3.png', 32, true, (error, data) => {
    if (error)
      reject(error);
    resolve(data); 
  });
});

Promise.all([promiseNewImg, promiseCompImg]).then(([dataNewImg, dataCompImg]) => {
  console.log(dataNewImg);
  console.log(dataCompImg);
  
  var similarity = stringSimilarity.compareTwoStrings(dataNewImg, dataCompImg); 
  console.log(similarity);
});
