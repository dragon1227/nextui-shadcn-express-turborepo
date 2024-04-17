import { T_User, T_UserRole } from "@repo/types";
import { Schema, model, Document } from "mongoose";

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: T_UserRole,
      default: T_UserRole.User,
    },
    providers: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

const userModel = model<T_User & Document>("User", userSchema);

export default userModel;
