import { Router } from 'express'
import { customerController } from '../controllers'

const router = Router()

router.get('/:uuid', customerController.findById)
router.get('/name/:name', customerController.findByName)
router.post('/', customerController.save)
router.delete('/:uuid', customerController.delete)
router.patch('/:uuid', customerController.updateName)

export default router
