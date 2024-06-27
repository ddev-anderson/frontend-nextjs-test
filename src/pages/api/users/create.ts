/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { IUser } from "@/types/user.d";
import { ApiMethod } from "@/decorators/method";
import { IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

export default ApiMethod("POST")(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const user: IUserCreate = req.body;
    users.push(user);
    return res.status(200).json({ message: "Sucesso" });
  }
);
