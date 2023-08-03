import mongoose from "mongoose";
import { Question } from "./question.interface";

export interface Survey {
  title: string;
  idUser: mongoose.Schema.Types.ObjectId;
  questions: Question[];
}
