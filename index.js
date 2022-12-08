const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 监听连接触发器
// 如果被触发则运行以下代码
io.on("connection", (socket) => {
  console.log("一个用户进入房间");

  //  当前端触发该触发器时 给前端触发器发送msg
  socket.on("chat message", (msg) => {
    console.log("触发js msg:" + msg);
    io.emit("chat message", msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
