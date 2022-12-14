import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {
  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(
      (s) => {
        myVideo.current.srcObject = s;
      },
    );
  }, []);

  return (
    <div>
      {<video ref={myVideo} autoPlay controls />}
    </div>
  );
}

export default App;
