import multer from "multer";
import routes from "./routes";

export const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.developer = "Manngold";
  res.locals.routes = routes;
  res.locals.user = {
    isAutenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
