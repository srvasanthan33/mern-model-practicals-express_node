const getAllServices = (request,response) => {
    response.json(Services)
}

const getServiceById = (request,response) =>{
    const service = request.service
    response.json(service)
}

const getServiceByIdMiddleware = (request,response,next,id) =>{
    let service_id = request.params.id
    try{
    request.service = Services[service_id]
    }
    catch(error)
    {
        response.send('Invalid Id')
    }
    next()
}
module.exports = {getAllServices,getServiceById,getServiceByIdMiddleware}