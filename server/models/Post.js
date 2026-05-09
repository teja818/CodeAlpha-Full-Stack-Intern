const mongoose = require("mongoose");

const postSchema =
  new mongoose.Schema({

    userId: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

    },

    caption: {

      type: String,

    },

    image: {

      type: String,

    },

    likes: [

      {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

      },

    ],

    comments: [

      {

        text: String,

        user: {

          type:
            mongoose.Schema.Types.ObjectId,

          ref: "User",

        },

      },

    ],

  },

  {

    timestamps: true,

  }

);

module.exports =
  mongoose.model(
    "Post",
    postSchema
  );