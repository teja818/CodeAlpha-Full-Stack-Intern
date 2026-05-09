const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

/* DATABASE CONNECTION */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB Connected 🚀"
    );

  })
  .catch((error) => {

    console.log(error);

  });

/* ROUTES */

const authRoutes =
  require("./routes/authRoutes");

const postRoutes =
  require("./routes/postRoutes");

app.use("/api/auth", authRoutes);

app.use("/api/posts", postRoutes);

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.json({

    message:
      "Social Media Backend Running 🚀",

  });

});

/* SERVER */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});