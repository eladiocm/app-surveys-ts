import mongoose, { Schema, model, mongo } from "mongoose";
import { User } from "../interfaces/user.interface";
import { Survey } from "../interfaces/survey.interface";

const SurveySchema = new Schema<Survey>(
  {
    title: { type: String, required: true, trim: true },
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    questions: [
      {
        type: { type: String, required: true },
        name: { type: String, required: true },
        opciones: [
          {
            name: { type: String },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SurveyModel = model("surveys", SurveySchema);
export default SurveyModel;
