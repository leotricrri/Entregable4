const express = require("express")




const app = express()
const arr = require("./arr")

app.use(express.json())


app.get("/api/productos", (req, res) => {
    res.send({ data: arr })
})

app.get("/api/productos/:id", (req, res) => {

    let idx = req.params.id

    let arrNew = arr.filter((x) => x.id == idx)

    res.send({ data: arrNew })
})

app.post("/api/productos", (req, res) => {

    let { id, name, price, stock } = req.body

    let obj = {
        id,
        name,
        price,
        stock
    }
    arr.push(obj)

    res.send({ data: arr})

})

app.put("/api/productos/:id", (req, res) => {
    
    console.log(req.body.id)

})

app.delete("/api/productos/:id", (req, res) => {
      
    
    const  id  = req.params;

    console.log(id)

    const projectIndex = arr.findIndex(p => p.id == id)
   
    arr.splice(projectIndex, 1)
   
    res.send({ data: arr})
})



app.listen(3002, () => {
    console.log("server run on port 3002")
})