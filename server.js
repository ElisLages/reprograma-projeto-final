const app = require('./src/app')
const port = 8080

app.listen(port, () => {
    console.log(`Server is running at door ${port}`)
})

//app.listen(process.env.PORT || port, () => {
   // console.log(`app está rodando na porta ${port}`)
   // })