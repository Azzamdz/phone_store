import express from "express";
import { testConnection } from "./config/db.js";
import userRouter from "./routes/usersRoute.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

testConnection();

app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
