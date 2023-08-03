import { Request, Response } from "express";
import {
  addResponse,
  deleteResponseById,
  getResponseById,
  getResponseByUserID,
  updateResponseById,
} from "../services/response";

/* const getSurveys = async (req: Request, res: Response) => {
  const surveys = await getAllSurveys();
  res.send(surveys);
}; */

const getResponseUser = async (req: Request, res: Response) => {
  const idUser = req.params.idUser;
  const surveys = await getResponseByUserID(idUser);
  if (!surveys) {
    res.status(404).json({ message: "Surveys not found" });
    return;
  }
  res.send(surveys);
};

const getResponse = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getResponseById(id);
  if (!response) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.send(response);
};

const createResponse = async ({ body }: Request, res: Response) => {
  const newResponse = await addResponse(body);
  res.send(newResponse);
};

const deleteResponse = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await deleteResponseById(id);
  if (!response) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.sendStatus(204);
};

const updateResponse = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newResponse = await updateResponseById(id, req.body);
  if (!newResponse) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.send(newResponse);
};

export {
  getResponseUser,
  getResponse,
  createResponse,
  deleteResponse,
  updateResponse,
};
