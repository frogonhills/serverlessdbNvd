// const https = require('https');

// let url = "https://gw4uwlsbmf.execute-api.us-east-1.amazonaws.com/dev/get_custodian";
// let bow = "" ;
// https.get(url,(res) => {
//     let body = "";

//     res.on("data", (chunk) => {
//         body += chunk;
//     });

//     res.on("end", () => {
//         try {
//             let json = JSON.parse(body);
//             // console.log(json)
//             bow = json ;
//             // do something with JSON
//         } catch (error) {
//             console.error(error.message);
//         };
//     });

// }).on("error", (error) => {
//     console.error(error.message);
// });

// console.log(bow);





const https = require('https');

let url = "https://gw4uwlsbmf.execute-api.us-east-1.amazonaws.com/dev/get_custodian";

const  rows  = https.get(url)
console.log(JSON.stringify(rows))



