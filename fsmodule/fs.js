const fs = require('fs'); //Importing the fs module
const os = require('os');

console.log(os.platform());

// Writing a file
fs.writeFile('./fs.txt', "Hello", (err) => {
    if (err) {
        console.log(err);
    } else{
        console.log("File has been written");
    }
})

//Reading the file
fs.readFile('./fs.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString()); // .toString() converts the buffer(what we get if we don't add the toString) to a string
    }
}) // this takes two parameters, the directory of the file i want to read and (err, data)


// Creatinhg a folder 
// fs.mkdir('./widgets', (err) => {
//     if (err) {
//     console.log(err);    
//     }
//     else {
//         console.log("Folder created");
//     }
// })

function makeDirWriteAndReadFile() {
    if (!fs.existsSync('./New')) {
        fs.mkdir('./New', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("New Folder has been created");
            }
        });
        fs.writeFile('./New/new.txt', "Hi New !!", (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("New file has been created and written");
            }
        });
        fs.readFile('./New/new.txt', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
            }
        });
        fs.unlink('./New/new.txt', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File deleted");
            }
        });
       
    } else {
        console.log('The path exists.');
    }
}
makeDirWriteAndReadFile();

