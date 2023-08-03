import { Request, Response } from "express";
import {
  addSurvey,
  deleteSurveyById,
  getAllSurveys,
  getSurveyById,
  getSurveysByUserID,
  updateSurveyById,
} from "../services/survey";

const getSurveys = async (req: Request, res: Response) => {
  const surveys = await getAllSurveys();
  res.send(surveys);
};

const getSurveyUser = async (req: Request, res: Response) => {
  const idUser = req.params.idUser;
  const surveys = await getSurveysByUserID(idUser);
  if (!surveys) {
    res.status(404).json({ message: "Surveys not found" });
    return;
  }
  res.send(surveys);
};

const getSurvey = async (req: Request, res: Response) => {
  const id = req.params.id;
  const survey = await getSurveyById(id);
  if (!survey) {
    res.status(404).json({ message: "Survey not found" });
    return;
  }
  res.send(survey);
};

const createSurvey = async ({ body }: Request, res: Response) => {
  const newSurvey = await addSurvey(body);
  res.send(newSurvey);
};

const deleteSurvey = async (req: Request, res: Response) => {
  const id = req.params.id;
  const survey = await deleteSurveyById(id);
  if (!survey) {
    res.status(404).json({ message: "Survey not found" });
    return;
  }
  res.sendStatus(204);
};

const updateSurvey = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newSurvey = await updateSurveyById(id, req.body);
  if (!newSurvey) {
    res.status(404).json({ message: "Survey not found" });
    return;
  }
  res.send(newSurvey);
};

export {
  getSurveys,
  getSurvey,
  createSurvey,
  deleteSurvey,
  updateSurvey,
  getSurveyUser,
};
