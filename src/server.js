import express from "express";
import { testConnection } from "./config/db.js";
import userRouter from "./routes/usersRoute.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import authRouter from "./routes/authRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

testConnection();

app.use(authRouter);
app.use(userRouter);
app.use(productRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
