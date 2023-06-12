let Services = [
    {
        name:"Web Development",
        price : "200$"
    },
    {
        name:"Game Development",
        price : "500$"
    },
    {
        name:"IT Support",
        price : "100$"
    },
    {
        name:"Cyber Security",
        price :"300 $"
    },
    {
        name:"Cloud Engineering",
        price:"600 $"
    }
]

const getAllServices = (request,response) => {
    response.json(Services)
}

const getServiceById = (request,response) =>{
    const service = request.service
    response.json(service)
}

const getServiceByIdMiddleware = (request,response,next,id) =>{
    let service_id = request.params.id
    
    request.service = Services[service_id]
    
    if (request.service == null) {
        response.send("Invalid id ")
    }
    console.log(request.service.name)
    next()
}
module.exports = {getAllServices,getServiceById,getServiceByIdMiddleware}