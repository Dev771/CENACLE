const config = require("./config/config.json")

const io = require("socket.io")(8900,{
    cors:{
        origin: config.backendLocalUrl
    }
});

io.on("connection", (socket) => {
    console.log("client connected")
    io.emit("welcome","kedicheez")
})

