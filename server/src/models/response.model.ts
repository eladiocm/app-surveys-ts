import mongoose, { Schema, model } from "mongoose";
import { Response } from "../interfaces/response.interface";

const ResponseSchema = new Schema<Response>(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    idSurvey: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "surveys",
      required: true,
    },
    responses: [
      {
        index: { type: String },
        response: { type: String },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ResponseModel = model("responses", ResponseSchema);
export default ResponseModel;
