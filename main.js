const fs = require('fs')
const http  = require('http')
const url = require('url')
const NewServer = http.createServer((req,res) => {
     const pathName = req.url

     if ( pathName === '/' || pathName === '/oveview') {
        res.end('This page overview !')
     } else if (pathName === '/product') {
        res.end('This is page product !')
     } else if(pathName === '/api') {
            fs.readFile(`${__dirname}/dev-data/data.json` ,'utf-8', (err ,data) => {
                const ProductData = JSON.parse(data)
                res.writeHead(200 , {'Content-type' : 'application/json'})
                res.end(data)
            })
           
     } else {
    
        res.end('Page not Found !')
     }
})

NewServer.listen(3000 , (req,res) => {
    console.log('Listen to from server port 3000 !')
})