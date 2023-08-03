import { Survey } from "../interfaces/survey.interface";
import SurveyModel from "../models/survey.model";

const getAllSurveys = async () => {
  const surveys = await SurveyModel.find();
  return surveys;
};

const getSurveysByUserID = async (userID: string) => {
  const surveys = await SurveyModel.find({ idUser: userID });
  return surveys;
};

const getSurveyById = async (id: string) => {
  const survey = await SurveyModel.findById(id);
  return survey;
};

const addSurvey = async (survey: Survey) => {
  const newSurvey = new SurveyModel(survey);
  const res = await newSurvey.save();
  return res;
};

const deleteSurveyById = async (id: string) => {
  const survey = await SurveyModel.findByIdAndDelete(id);
  return survey;
};

const updateSurveyById = async (id: string, survey: Survey) => {
  const res = await SurveyModel.findByIdAndUpdate(id, survey, { new: true });
  return res;
};

export {
  getAllSurveys,
  getSurveysByUserID,
  getSurveyById,
  addSurvey,
  deleteSurveyById,
  updateSurveyById,
};
