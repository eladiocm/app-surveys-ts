import { Res } from "./res.interface";

export interface Response {
  idUser: string;
  idSurvey: string;
  responses: Res[];
}
