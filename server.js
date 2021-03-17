const express = require("express")
// const dotenv = require("dotenv")
const bodyParser = require("body-parser")

const port = 3004
const app = express()

app.use(bodyParser.json())

// const result = dotenv.config()
// if (result.error) {
//   console.error('Could not find .env at the root folder.')
//   throw result.error
// }

app.use('/public', express.static("public"))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.status(200)
  res.render('index')
})

console.log(`Starting dev server for brand : ${process.env.BRAND_NAME}`)

app.listen(port, () => {
  console.log(`Development server running and listening to port : ${port}`)
})
