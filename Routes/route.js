import express from 'express'
import {getData} from '../Controllers/getStudDataContollers.js'
import {addData} from '../Controllers/addStudDataControllers.js'

export const router = express.Router()

router.get('/',getData)
router.post('/add-data',addData)