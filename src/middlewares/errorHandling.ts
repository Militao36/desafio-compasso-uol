import { NextFunction, Request, Response } from 'express'

const errorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500
  return res.status(statusCode).json({
    message: err.message,
    erros: err.body
  })
}

export { errorHandling }
