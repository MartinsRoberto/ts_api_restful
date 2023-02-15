import {Router, Request, Response} from 'express'

const router = Router()

export default router.get('/api', (req: Request, res:Response) => {
  res.status(200).send('OK')
})