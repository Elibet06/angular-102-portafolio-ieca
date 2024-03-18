const http = require('http')
const PORT = 3000

const server = http.createServer(async(request,response) =>{
    response.writeHead (200, { "Content-Type" : "aplplication/json" })
    try{
        //console.log('Obteniendo Data...')
        const responseFetch = await fetch("http://jsonplaceholder.typicode.com/todos")
       // console.log(responseFetch)
        const json = await response.json()
        //console.groupCollapsed('Presentando Data')
        response.end(JSON.stringify(json,null,'\t'))
    }
    catch (error){
        console.error(error)
        response.writeHead(500, {"Content-Type": "text/plain" })
        response.end("Error")
    }
})

server.listen(PORT, () => {
    console.log(`Servidor Levantado en puerto: $(PORT)`)
})
