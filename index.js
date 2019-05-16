import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log(`Server is online on http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("hi there");
};

const handleProfile = (req, res) => {
  res.send("here is profile");
};

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
