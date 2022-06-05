//this is the mandate line to require file system(fs)
const fs = require("fs");

//here we are creating a file named myfile.txt are adding some dummy content.
fs.writeFileSync("myfile.txt", "this is our first file");