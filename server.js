const express = require("express")
const bodyParser = require("body-parser")

const port = process.env.NODE_PORT || 8080
const app = express()

app.use(bodyParser.json())

app.use('/public', express.static("public"))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.status(200)
  res.render('index')
})

console.log(`Starting server with NODE_ENV : ${process.env.NODE_ENV}`)

app.listen(port, () => {
  console.log(`Server running and listening to port : ${port}`)
})
