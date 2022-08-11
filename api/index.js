const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const videoRoute = require("./routes/videos");
const listRoute = require("./routes/lists");
const diaryRoute = require("./routes/diaryEntries");

dotenv.config(); //Using an env file so that our URL is secure 

//connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/videos", videoRoute);
app.use("/api/lists", listRoute);
app.use("/api/diaryEntries", diaryRoute);

//listen to my port and log backend server is running
app.listen(8800, () => {
  console.log("Backend server is running!");
});