const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/flats'){
        res.end("Flats are available!!")
        
    }
    if(req.url === '/'){
        res.end("Home Page!")
        
    }
    res.end(`
        <h1>Sorry! NOthing fOund!</h1>
        <a href ='/'>GO BACK SIMON!</a>
        `)
})
server.listen(3500);
