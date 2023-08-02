import { Schema, model } from "mongoose";
import { Response } from "../interfaces/response.interface";

const ResponseSchema = new Schema<Response>({
  idUser: { type: String },
  idSurvey: { type: String },
  responses: [
    {
      index: { type: String },
      response: { type: String },
    },
  ],
});

const ResponseModel = model("responses", ResponseSchema);
export default ResponseModel;
