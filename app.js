// external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const { error } = require("console");
const app = express();
dotenv.config();
// Database connection
mongoose
  .connect(process.env.MONGO_CONNECT_STRING)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Database connection error:", err));
//request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
// set static folder
app.use(express.static(Path.join(__dirname, "public")));
//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);
//404 not found handler
app.use(notFoundHandler);
//default error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
