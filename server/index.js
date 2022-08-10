const express = require("express");
const path = require("path");
const cors = require("cors");
const connecttomongo = require("./db");
const port = process.env.PORT || 3001;
const User = require("./model/user");

const app = express();

connecttomongo();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.post("/api/save", async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: "INTERNAL SERVER ERROR" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
