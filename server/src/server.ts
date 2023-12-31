import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";
import { router } from "./routes";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
db()
  .then(() => console.log("Connection Ready"))
  .catch((err) => console.log("Error", err));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
