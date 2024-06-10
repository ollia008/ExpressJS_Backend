const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')
// app.use(logger)

// app.get('/', (req, res) => {
//     // console.log('here')
//     // res.download('server.js')
//     res.render('index', {text: "World"})
//     // res.json({message: 'error'})
//     // res.send("hi")
// })



const userRouter = require('./routes/users')
app.use('/users', userRouter)



app.listen(3000)
