const fs = require("fs");

// // JS object
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const book_json = JSON.stringify(book);
// fs.writeFileSync("1-json.json", book_json);

// @note we call this buffer because what comes back
// from readFileSync is not a string but a binary buffer
const data_buffer = fs.readFileSync("1-json.json");
const data_json = data_buffer.toString(); // binary buffer to string
const data = JSON.parse(data_json);
console.log(data);

data.title = "Audacity of Hope";
data.author = "Barack Obama";

fs.writeFileSync("1-json.json", JSON.stringify(data));
