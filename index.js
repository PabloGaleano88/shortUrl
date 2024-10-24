import express from "express";
import mainPageRouter from "./backend/src/routes/mainPageRouter.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainPageRouter);
