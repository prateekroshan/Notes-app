const file = require('fs');


const dataBuffer = file.readFileSync("practice.json");
const stringFormat = dataBuffer.toString();
const parseData = JSON.parse(stringFormat);

parseData.name = "roshan";
parseData.age = "24";

const userJson = JSON.stringify(parseData);
console.log(userJson);
file.writeFileSync('practice.json',userJson);
