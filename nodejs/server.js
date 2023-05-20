//START THE SERVER
//using PORT 3000 to connect
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(process.env.NODE_ENV);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("DB connection  successfull!"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});

