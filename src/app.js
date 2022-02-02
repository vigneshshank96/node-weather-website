const path = require('path')
const express = require('express')
const hbs = require('hbs') 
const app= express()


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
//console.log(__filename)

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
const viewpaths = path.join(__dirname, '../views')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewpaths)

//Setup static directory to serve 
app.get('', (req, res) =>{
    res.render('index',{
        title:'weather App',
        name:'Andrew'
    })
})

app.get('/about', (req, res) =>{
    res.render('about'),{
        title:' About',
        name:'vignesh'
    }
})
app.get('', (req, res) =>{
res.send('<h1>Weather</h1>')
})


app.get('/help', (req, res) =>{
    res.send(express.static(publicDirectoryPath))
})

app.get('/about', (req, res) =>{
    res.send(express.static(publicDirectoryPath))
})

app.get('/weather', (req, res) =>{
    res.send('Weather page')
})

console.log('Hi Vignesh')
app.listen(3000,() =>{
    console.log('Server is up on port 3000.')
})