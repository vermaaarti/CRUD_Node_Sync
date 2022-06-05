//this is the mandate line to require file system(fs)
const fs = require ("fs");

//here we are reading the data and storing it in a variable

const data = fs.readFileSync("myfile.txt");
console.log(data);

//it we run the above command we get the buffer data i. e. binary data
//to avoid this we change the buffer data into string
//note - run below mentioned command

// const data = fs.readFileSync("myfile.txt");
// const newdata = data.toString();
// console.log(newdata);

//or we can also use character encoding method i. e. utf-8 or utf-16
// const data = fs.readFileSync("myfile.txt","UTF-8");
// console.log(data);
