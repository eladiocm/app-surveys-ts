import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const register = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);

  res.send(responseUser);
};

const login = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  res.send(responseUser);
  
};

export { register, login };
