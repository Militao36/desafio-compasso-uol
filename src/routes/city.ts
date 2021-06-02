import { Router } from 'express'
import { cityController } from '../controllers'

const router = Router()

router.post('/', cityController.save)
router.get('/name/:name', cityController.findByName)
router.get('/state/:state', cityController.findByState)

export default router
