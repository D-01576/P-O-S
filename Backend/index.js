const express = require("express");
const cors = require("cors")
const { admin } = require("./Routes/admin");
const { user } = require("./Routes/user");



const app = express();
app.use(cors())
app.use(express.json());
app.use("/admin", admin);
app.use("/user", user);

app.listen(3000);
