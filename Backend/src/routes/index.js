const userRouter = require("./user");
const excusaRouter = require("./excusas");

const registerRoutes = (app) => {
    app.use("/api", userRouter);
    app.use("/api/excusa",excusaRouter);
  };
  
  module.exports = registerRoutes;