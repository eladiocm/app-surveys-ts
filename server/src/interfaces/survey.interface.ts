import { Question } from "./question.interface";

export interface Survey {
  title: string;
  idUser: string;
  questions: Question[];
}
