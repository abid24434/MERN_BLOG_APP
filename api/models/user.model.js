import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: 'https://images.app.goo.gl/8zkjksDGns1P7SeQ7'
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
