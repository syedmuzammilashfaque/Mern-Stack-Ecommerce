import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { config } from "dotenv";
import errorMiddleware from "./middleware/error.js";

// config env file //
config({
    path: "./config/config.env",
})


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    fileUpload());
app.use(cors());



// link the routers file //
import User from "./routes/User.js";
import Product from "./routes/Product.js";
import Order from "./routes/Order.js";


app.use("/api", User);
app.use("/api", Product);
app.use("/api", Order);


app.get("/", (req, res) => {
    res.send("server is working");
});

// middleware for error //
app.use(errorMiddleware);