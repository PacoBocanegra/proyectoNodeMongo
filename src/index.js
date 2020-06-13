import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// Conf server
const app = express()
app.disable('x-powered-by')

app.set('env', 'development')

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join('src', 'Views'))
app.set('view engine', 'pug')

//Conexión a mongo
const host = 'mongodb://127.0.0.1:27017/posts'
const conn = mongoose.createConnection(
    host,
    { poolSize: 200 }
)

conn.on('error', err => {
    console.log('Error: ', err)
    return process.exit()
})
conn.on('connected', () => console.log('Conectando a mongo'))

// Rutas

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/posts', (req, res) => {
    conn.collection('posts').find({}).toArray().then(function (postsList){
        res.render('posts', {
            posts: postsList
        })
    })
})

app.post('/addPost', (req, res) => {
    conn.collection('posts').insertOne(req.body)
    res.render('postReceived', {
        mensajeInsert: JSON.stringify(req.body)
    })
})

// Carga ficheros estáticos
app.use('/static', express.static(path.join('src', 'public')))


//Levanta el server
app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000')
})