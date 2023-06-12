const express = require("express")
const router = express.Router()

const {getAllServices,getServiceById,getServiceByIdMiddleware} = require('../controllers/serviceController')


router.route('/').get(getAllServices)

// getById using param middleware
router.get('/:id',getServiceById)
.param("id",getServiceByIdMiddleware) 

module.exports = router