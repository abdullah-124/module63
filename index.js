const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hello form my first ever node')
})
const users = [
   {id: 0, name: "shuborshi", email: 'shuborshi@gmail.com' },
   {id: 1, name: "shabana", email: 'shabana@gmail.com' },
   {id: 2, name: "shabnur", email: 'shabnur@gmail.com' },
   {id: 3, name: "moushumi", email: 'moushumi@gmail.com' },
   {id: 4, name: "nipun", email: 'nipun@gmail.com' },
   {id: 5, name: "popi", email: 'popi@gmail.com' },
]
app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
   
})
//app methodes 
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post methods')
    res.json(newUser)
})
app.get('/users/:id', (req, res)=>{
    const userId = req.params.id
    console.log(userId)
    const user = users[userId]
    res.send(user)
})
app.listen(port, ()=>{
    console.log('listening to port ', port)
})
