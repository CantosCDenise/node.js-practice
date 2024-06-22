import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200; //200 means okay, the request was succesful

    response.setHeader("Content-Type", "application/json"); 

    const jsonResponseBody = JSON.stringify({ location: "Marth" });

    response.end(jsonResponseBody);
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
}); //We are specifying the port, any data that arrive to port 3000 should be sent to this script, and once its set up properly the callback function will run



//to stop our server we use the shortcut key ctrl + c