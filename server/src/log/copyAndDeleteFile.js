// const fs = require('fs');
// const path = require('path');
// const transformData = require('./transformData');

// const sourceFilePath = path.join(__dirname, 'error.log');
// // const destinationFilePath = path.join(__dirname, 'dest.log');

// function copyAndDeleteFile() {
//   fs.readFile(sourceFilePath, 'utf-8', (readErr, data) => {
//     if (readErr) {
//       console.log('Error reading', readErr);
//       return;
//     }

//     const logEntries = data
//       .trim()
//       .split('\n')
//       .filter((line) => line);

//     const transformed = transformData(logEntries);

//     const destination = path.join(
//       __dirname,
//       'archivedLogs',
//       `${new Date().toISOString()}`
//     );
//     fs.appendFile(
//       destination,
//       JSON.stringify(transformed, null, 2),
//       (copyErr) => {
//         if (copyErr) {
//           console.log('Error writing', copyErr);
//           return;
//         }
//       }
//     );

//     fs.writeFile(sourceFilePath, '', (writeErr) => {
//       if (writeErr) {
//         console.log('Error clearing');
//       } else {
//         console.log('File copied and src cleared');
//       }
//     });
//   });
// }

// module.exports = copyAndDeleteFile;
