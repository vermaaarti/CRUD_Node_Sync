//this is the mandate line to require file system(fs)
const fs = require ("fs");

//here we are updating the file name from myfile.txt to newname.txt
fs.renameSync("myfile.txt", "newname.txt");