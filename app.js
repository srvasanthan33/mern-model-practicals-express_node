const express = require("express")
const app = express()
const PORT = 3500

app.get('/',(request,response) =>{
    response.send("Service Page")
})

const servicePage = require('./routes/serviceRouter')
app.use('/api/v1/services',servicePage)

app.listen(PORT,console.log(`Server running at http://localhost:${PORT}`))