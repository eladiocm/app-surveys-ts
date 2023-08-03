import { Router } from "express";
import { checkJwt } from "../middleware/session";
import {
  createSurvey,
  deleteSurvey,
  getSurvey,
  getSurveyUser,
  getSurveys,
  updateSurvey,
} from "../controllers/survey.controller";

const router = Router();

router.get("/", checkJwt, getSurveys);

router.get("/user/:idUser", checkJwt, getSurveyUser);

router.get("/:id", checkJwt, getSurvey);

router.post("/", checkJwt, createSurvey);

router.delete("/:id", checkJwt, deleteSurvey);

router.put("/:id", checkJwt, updateSurvey);

export { router };
