import express from "express";
import routes from "./routes/index.js";

const app = express();
const port = 8080;

app.use("/user", routes.userRoutes);
app.use("/jodhpur", routes.jodhpurRoutes);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
