const fs = require("fs");

// // JS object
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const book_json = JSON.stringify(book);
// fs.writeFileSync("1-json.json", book_json);

// @todo we call this buffer because what comes back
// from readFileSync is not a string but a binary buffer
const data_buffer = fs.readFileSync("1-json.json");
console.log(data_buffer);
