import { Response } from "../interfaces/response.interface";
import ResponseModel from "../models/response.model";

/* const getAllSurveys = async () => {
  const surveys = await ResponseModel.find();
  return surveys;
}; */

const getResponseByUserID = async (userID: string) => {
  const responses = await ResponseModel.find({ idUser: userID }).populate(
    "surveys"
  );
  return responses;
};

const getResponseById = async (id: string) => {
  const survey = await ResponseModel.findById(id);
  return survey;
};

const addResponse = async (response: Response) => {
  const newResponse = new ResponseModel(response);
  const res = await newResponse.save();
  return res;
};

const deleteResponseById = async (id: string) => {
  const response = await ResponseModel.findByIdAndDelete(id);
  return response;
};

const updateResponseById = async (id: string, response: Response) => {
  const res = await ResponseModel.findByIdAndUpdate(id, response, {
    new: true,
  });
  return res;
};

export {
  /* getAllSurveys, */
  getResponseByUserID,
  getResponseById,
  addResponse,
  deleteResponseById,
  updateResponseById,
};
