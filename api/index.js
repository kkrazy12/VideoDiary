// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require(''../api/.env").config();

// dotenv.config();

// // main().catch(err => console.log(err));

// // async function main(process.env.MONGO_URL,) {
// //   await mongoose.connect('mongodb+srv://kaye:<password>@cluster0.yfizzam.mongodb.net/?retryWrites=true&w=majority');
// // }

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })  
//     .then(()=>console.log("DB Connection Successfull"))
//     .catch((err) => console.log(err));

// app.listen(8800, ()=> {
//     console.log("API server running")
// })

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const videoRoute = require("./routes/videos");
const listRoute = require("./routes/lists");
const diaryRoute = require("./routes/diaryEntries");

dotenv.config(); //Using an env file so that our URL is secure 

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

app.listen(8800, () => {
  console.log("Backend server is running!");
});