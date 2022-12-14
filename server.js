const app = require("express")();
const server = require("http").Server(app);
const cors = require("cors");

app.use(cors);

const port = process.env.PORT || 3000;

const io = require("socket.io")(server, {
  cors: {
    // 指定全部地址都可以连接
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

io.on("connection", (socket) => {
  console.log(`${socket.id}用户连接`);

  socket.on("disconnect", () => {
    console.log(`${socket.id}用户已断开`);
    socket.broadcast.emit("callEnded");
  });

  socket.on("joinRoom", () => {
  });
});
