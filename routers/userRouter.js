import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users page"));
userRouter.get(routes.userDetail, (req, res) => res.send("userdetail page"));
userRouter.get(routes.editProfile, (req, res) => res.send("edit page"));
userRouter.get(routes.changePassword, (req, res) => res.send("change password page"));

export default userRouter;
