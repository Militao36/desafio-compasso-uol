import { Router } from 'express'
import CityRoutes from './city'
import CustomerRoutes from './customer'

const router = Router()

router.use('/citys', CityRoutes)
router.use('/customers', CustomerRoutes)

export default router
