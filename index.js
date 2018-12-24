import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleProfile = (req, res) => res.send("Here is profile page");

const handleHome = (req, res) => res.send("Hello from home");

const betweenHome = (req, res, next) => {
  console.log("i'm between");
  next();
};

app.use(betweenHome); //global middleware

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
