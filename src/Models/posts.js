import mongoose from 'mongoose'

const host = 'mongodb://127.0.0.1:27017/posts'

mongoose.set('debug', true)
mongoose.Promise = global.Promise
const conn = mongoose.createConnection(
    host,
    { poolSize: 200 }
)

conn.on('error', err => {
    console.log('Error: ', err)
    return process.exit()
})
conn.on('connected', () => console.log('Conectando a mongo'))

const postSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        titulo: { type: String, trim: true, required: true },
        autor: { type: String, trim: true, required: true },
        fechaPublicacion: { type: String, trim: true, required: true },
        categoria: { type: String, trim: true, required: true },
        descripcion: { type: String, trim: true, required: true }
    },
    {
        strict: false
    }
)

const Post = conn.model('Post', postSchema)

const newDocument = new Post({
    _id: new mongoose.Types.ObjectId(),
    titulo: 'Novedades Angular',
    autor: 'Francisco Bocanegra',
    fechaPublicacion: '02/10/2016',
    categoria: 'tecnologia',
    descripcion: 'Actualmente angular nos ofrece una cantidad de novedades que nos facilita el desarrollo con JavaScript.'
})

newDocument.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacenado')
})

const newDocument2 = new Post({
    _id: new mongoose.Types.ObjectId(),
    titulo: 'Nuevo virus',
    autor: 'Eddy Gonzalez',
    fechaPublicacion: '20/01/2020',
    categoria: 'salud',
    descripcion: 'Se ha detectado un nuevo virus que está arrasando con el mundo. Se requiere precaución máxima.'
})

newDocument2.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacenado')
})

const newDocument3 = new Post({
    _id: new mongoose.Types.ObjectId(),
    titulo: 'Revolución de Python',
    autor: 'Robert Puiu',
    fechaPublicacion: '03/10/2018',
    categoria: 'tecnologia',
    descripcion: 'Parece ser que el lenguaje de programación Python, está empezando a coger fuerza y se empieza a poner en cabeza junto con Java.'
})

newDocument3.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacenado')
})

const newDocument4 = new Post({
    _id: new mongoose.Types.ObjectId(),
    titulo: 'Novedades Vue.js',
    autor: 'Francisco Bocanegra',
    fechaPublicacion: '20/05/2020',
    categoria: 'tecnologia',
    descripcion: 'Vue.js está pegando un buen impulso en los nuevos proyectos Front-end y se espera mucho de este framework progresivo. Revolución de JavaScript'
})

newDocument4.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacenado')
})

const newDocument5 = new Post({
    _id: new mongoose.Types.ObjectId(),
    titulo: 'Novedosa receta con pollo',
    autor: 'Paula Sánchez',
    fechaPublicacion: '10/10/2019',
    categoria: 'cocina',
    descripcion: 'Esta receta está para chuparse los dedos. Pruébala y aporta tu comentario sobre ella.'
})

newDocument5.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacenado')
})

const newDocument6 = new Post({
    _id: new mongoose.Types.ObjectId(),
    titulo: 'Infección en la carne mechada',
    autor: 'Paula Sánchez',
    fechaPublicacion: '10/10/2019',
    categoria: 'salud',
    descripcion: 'Ciertas marcas de carne mechada está vendiendo sus carnes con una infección proveniente del cerdo y está provocando una infección en las personas que lo ingieren.'
})

newDocument6.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacenado')
})