const http  = require('http')

const NewServer = http.createServer((req,res) => {
      res.end('helo from server !')
})

NewServer.listen(3000 , (req,res) => {
    console.log('Listen to from server port 3000 !')
})