import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response) => {
  res.json({ message: 'Health is Good' });
};
