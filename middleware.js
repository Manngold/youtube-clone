import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.developer = "Manngold";
  res.locals.routes = routes;
  res.locals.user = {
    isAutenticated: true,
    id: 1
  };
  console.log(res.locals);
  next();
};
