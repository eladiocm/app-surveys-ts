import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, username }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "Already Exist";
  const passHash = await encrypt(password);
  const newUser = await UserModel.create({
    email,
    password: passHash,
    username,
  });

  return newUser;
};

const loginUser = async ({ email, password }: Auth) => {
  try {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "Not_Found_User";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);
    if (!isCorrect) return "Incorrect_Password";
    const token = generateToken(email);
    const data = {
      token,
      user: {
        id: checkIs._id,
        email: checkIs.email,
        username: checkIs.username,
      },
    };

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { registerNewUser, loginUser };
