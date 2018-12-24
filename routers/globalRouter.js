import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Here is home"));
globalRouter.get("/login", (req, res) => res.send("Here is login"));
globalRouter.get("/join", (req, res) => res.send("Here is join"));

export default globalRouter;
