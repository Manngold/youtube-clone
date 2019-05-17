import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user home page"));
userRouter.get("/edit", (req, res) => res.send("user edit page"));
userRouter.get("/password", (req, res) => res.send("user password page"));
