const express = require("express")
const router = express.Router()

const {getAllServices,getServiceById,getServiceByIdMiddleware} = require('../controllers/serviceController')
let Services = [
    {
        name:"Web Development",
    },
    {
        name:"Game Development"
    },
    {
        name:"IT Support"
    },
    {
        name:"Cyber Security"
    }
]

router.route('/').get(getAllServices)

router.get('/:id',getServiceById)
.param("id",getServiceByIdMiddleware)

module.exports = router