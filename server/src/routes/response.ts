import { Router } from "express";
import { checkJwt } from "../middleware/session";
import {
  createResponse,
  deleteResponse,
  getResponse,
  getResponseUser,
  updateResponse,
} from "../controllers/response.controller";

const router = Router();

router.get("/user/:idUser", checkJwt, getResponseUser);

router.get("/:id", checkJwt, getResponse);

router.post("/", checkJwt, createResponse);

router.delete("/:id", checkJwt, deleteResponse);

router.put("/:id", checkJwt, updateResponse);

export { router };
