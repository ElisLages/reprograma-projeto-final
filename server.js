require('dotenv-safe').config()

const app = require('./src/app')
const port = process.env.PORT || 8080;


app.listen(port, () => {
   console.log(`Application is running at door ${port}`)
   })