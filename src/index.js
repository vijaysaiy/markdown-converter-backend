import express from "express";
import markDownRouter from "./routes/markdown-html.router.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.send("welcome to mark down converter"));

app.use("/api/v1/", markDownRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
