// commented out so same file can be run again

/* #2 add the args added to calling function from terminal - all tests passed
let arr = process.argv.slice(2);
console.log(arr.reduce((acc, cv) => Number(acc) + Number(cv)));
*/


/* #3 Sync I/O  - all tests passed
const fs = require('fs');

let path = process.argv[2];

let content = fs.readFileSync(path);
let arr = content.toString().split('\n');

let number = arr.length - 1;
console.log(number);
*/


/* #4 Async I/O  - all tests passed
const fs = require('fs');

let path = process.argv[2];
fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let number = data.split('\n').length -1;
        console.log(number);
    }
});
*/

/* #5 Filtered list of files  - all tests passed

const fs = require('fs');
const path = require('path');

let dir = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(dir, 'utf-8', (err, list) => {
    if (err) {
        console.log(err)
    } else {
        //console.log(list);
        //console.log(extension);
        const filteredList = list.filter(el => path.extname(el) === extension
        );
        filteredList.forEach(el => console.log(el));
    }
})
*/


/* #7 http client - all tests passed
const http = require('http');

const url = process.argv[2];

http.get(url, response => {

response.setEncoding('utf-8').on('data', data => console.log(data));
response.on('error', console.error);
}).on('error', console.error)
*/


/* #8 http collect: collect all data before printing  - all tests passed
const http = require('http');

const url = process.argv[2];

http.get(url, response => {
    let resStr = "";
    response.setEncoding('utf-8').on('data', data => {
        resStr += data;
        
    })
    response.on('end', () => {
        console.log(resStr.length)
        console.log(resStr)
})
})
*/


/* #9 juggling async  - all tests passed

const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let counter = 0;

let resStr1 = "";
let resStr2 = "";
let resStr3 = "";

http.get(url1, response => {
    
    response.setEncoding('utf-8').on('data', data => {
        resStr1 += data;
        
    })
    response.on('end', () => {
    counter++;
    if (counter === 3) {
        console.log(resStr1)
        console.log(resStr2)
        console.log(resStr3)
    }
})
})
http.get(url2, response => {
    
    response.setEncoding('utf-8').on('data', data => {
        resStr2 += data;
        
    })
    response.on('end', () => {
    counter++;
    if (counter === 3) {
        console.log(resStr1)
        console.log(resStr2)
        console.log(resStr3)
    }
})
})
http.get(url3, response => {
    
    response.setEncoding('utf-8').on('data', data => {
        resStr3 += data;
        
    })
    response.on('end', () => {
    counter++;
    if (counter === 3) {
        console.log(resStr1)
        console.log(resStr2)
        console.log(resStr3)
    }
})
})
*/


/* #10 time server  - all tests passed

const net = require('net');
const port = process.argv[2];

const server = net.createServer((socket) => {
    const date = new Date();
*/ /*
    const monthFormat = (date) => {
        if (date.getMonth() +1 < 10) {
            return `0${date.getMonth() +1}`;
        } else {
            return `${date.getMonth() +1}`;
        }
    }
    const dayFormat = (date) => {
        if (date.getDate() < 10) {
            return `0${date.getDate()}`;
        } else {
            return `${date.getDate()}`;
        }
    }
    const hourFormat = (date) => {
        if (date.getHours() < 10) {
            return `0${date.getHours()}`;
        } else {
            return `${date.getHours()}`;
        }
    }
    const minFormat = (date) => {
        if (date.getMinutes() < 10) {
            return `0${date.getMinutes()}`;
        } else {
            return `${date.getMinutes()}`;
        }
    }
    
    const format = `${date.getFullYear()}-${monthFormat(date)}-${dayFormat(date)} ${hourFormat(date)}:${minFormat(date)}\n`;
    */ /* refactored into on checker function
    const formatChecker = (mdhm) => {
        if (mdhm < 10) {
            return `0${mdhm}`
        } else {
            return mdhm;
        }
    }
    const format = `${date.getFullYear()}-${formatChecker(date.getMonth()+1)}-${formatChecker(date.getDate())} ${formatChecker(date.getHours())}:${formatChecker(date.getMinutes())}\n`;
    socket.write(format);
    socket.end();
    //or simply socket.end(data) combines both above
})
server.listen(port);
*/


/* #11 http file server  - all tests passed

const http = require('http');
const fs = require('fs');
const port = process.argv[2];

const fileUrl = process.argv[3];

const server = http.createServer((req, res) => {
    let stream = fs.createReadStream(fileUrl);
    stream.pipe(res);

})

server.listen(port);
*/


/* #12 http uppercaserer - didnt do, need package
const http = require('http');

const port = process.argv[2];

*/