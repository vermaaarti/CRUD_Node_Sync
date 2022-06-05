 //this is the mandate line to require file system(fs)
 const fs = require ("fs");

//here we are adding some data at the end of existing data
fs.appendFileSync("myfile.txt" , " this is another dummy data from append file sync function");