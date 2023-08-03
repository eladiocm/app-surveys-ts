import mongoose from "mongoose";
import { Res } from "./res.interface";

export interface Response {
  idUser: mongoose.Schema.Types.ObjectId;
  idSurvey: mongoose.Schema.Types.ObjectId;
  responses: Res[];
}
