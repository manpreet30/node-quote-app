import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { APIRoutes } from "./src/routes/index.js";

const MONGO_URL = "URL";
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.error("Error in Mongoose DB", err) : console.log("Mongoose DB connected")),
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error: "));

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true, // access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }),
);

app.use(express.static("public"));
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("listening to 3001");
});

app.use("/api", APIRoutes);
