const http = require("http");
const server = http.createServer((req, res) => {
}).listen(8080);
server.on("myEventName", (userName) => {
    console.log("Hello, " +userName);
});
server.emit("myEventName", "John");


