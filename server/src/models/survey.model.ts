import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";
import { Survey } from "../interfaces/survey.interface";

const SurveySchema = new Schema<Survey>(
  {
    title: { type: String, required: true, trim: true },
    idUser: { type: String, required: true },
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
  {}
);

const SurveyModel = model("surveys", SurveySchema);
export default SurveyModel;
