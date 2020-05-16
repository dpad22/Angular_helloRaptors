const express = require("express")

const app = express()

// settings


app.use(express.static(__dirname + '/public/dist/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app)


app.listen(8000, () => console.log("listening on port 8000. Clever Girl!"));