require("dotenv").config();
const express = require("express");

require("./db/conn");
const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(require("./controller/route"));

app.listen(port, () => {
  console.log(`listing to the port no. ${port}`);
});
