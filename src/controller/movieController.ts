import { Request, Response } from "express";
import { MovieMovel } from "../model/Movie";

const MovieController = {
  create: async(req: Request, res: Response) => {
    res.send('chegou')
  }
}

module.exports = MovieController
