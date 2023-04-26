import express from 'express'
import { userSignup, userLogin } from '../controllers/userController.js'
import { getProductById, getProducts } from '../controllers/productController.js'
const router = express.Router()

router.post('/signup', userSignup)
router.post('/login', userLogin)

router.get('/products', getProducts)
router.get('/product/:id', getProductById)


export default router