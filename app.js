const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let data = [
    {name:"chan1", detail:"1234asdf"},
    {name:"chan2", detail:"1234asdf"},
    {name:"chan3", detail:"1234asdf"},
    {name:"chan4", detail:"1234asdf"},
]

app.get('/api/v1', (req, res) => {
    const Id = parseInt(req.params.id);
    res.send({
        status: 200, 
        msg:'success' ,
        data:data} )
})

app.get('/api/v1/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send({
        status: 200, 
        msg:'success' ,
        data:data[id] 
    }
        || { 
            status: 400 ,
            error: 'Unknow id' })
})

app.post('/api/v1', (req, res) => {
    const { name, detail } = req.body;
    const data_insert = {name:name, detail:detail}
    data.push(data_insert)
    res.send({
        status: 201, 
        msg:'success' } )
})

app.put('/api/v1/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, detail } = req.body;
    const data_insert = {name:name, detail:detail}

    data[id] = data_insert
    res.send({
        status: 200, 
        msg:'success',
        data:data[id] } 
        || { 
            status: 400 ,
            error: 'Unknow id' })
})

app.delete('/api/v1/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data.splice(id,1)
    res.send({
        status: 200, 
        msg:'success' } )
})

app.get('/', (req, res) => {
    res.send({
        status: 200,
        msg:'This is API TODO-API-MANUAL'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
