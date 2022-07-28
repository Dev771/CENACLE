// const { connection } = require("mongoose");
const config = require("./config/config.json")

const io = require("socket.io")(8900,{
    cors:{
        origin: config.backendLocalUrl
    }
});

let users =[];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) && 
        users.push({userId , socketId})
}


const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
    console.log(users, " users")
    console.log(userId)
    return users.find((user) => user.userId == userId)
}

io.on("connection", (socket) => {
    console.log("userconnected")
    // io.emit("welcome","waaao")

    socket.on("addUser", userId => {
        addUser(userId , socket.id)
        io.emit("getUsers", users)
    })

    socket.on("sendMessage", ({senderId, recevierID, text}) => {
        const user = getUser(recevierID);
        console.log(user);
        io.emit("getMessage", {
            senderId, 
            text 
        })
    })

    socket.on("dissconnect", () => {
        console.log("dissznuts")
        removeUser(socket.id)
        io.emit("getUsers" , users)
    })
})