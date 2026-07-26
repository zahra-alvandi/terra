import dotenv from "dotenv";
import app from "./app";

dotenv.config();

// const PORT = process.env.PORT || 5000;
const PORT = 5050;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("close", () => {
  console.log("SERVER CLOSED");
});

process.on("exit", (code) => {
  console.log("PROCESS EXIT:", code);
});

setInterval(() => {
  console.log("alive...");
}, 5000);
