const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw Error;
//     console.log('Folder created...')
// })

// // Create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     "Hey world...",
//     err => {
//     if (err) throw Error
//     console.log(`File written to: ${path.join(__dirname, '/text', 'hello.txt')}`)

//     // File append
//     fs.appendFile(
//         path.join(__dirname, '/test', 'hello.txt'), 
//         "Goodbye..",
//         err => {
//         if (err) throw Error
//         console.log(`File written to: ${path.join(__dirname, '/text', 'hello.txt')}`)
//     }) 
// }) 

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
//     if (err) throw err
//     console.log('File renamed...')
// })