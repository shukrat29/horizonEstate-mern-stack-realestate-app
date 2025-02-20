import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
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
    avatar: {
      type: String,
      default:
        "https://www.utsmotorsports.com/wp-content/uploads/2019/03/kisspng-computer-icons-user-image-person-silhouette-my-svg-png-icon-free-download-419940-onlinewe-5b6512e70b0b21.9641097515333506310452.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
