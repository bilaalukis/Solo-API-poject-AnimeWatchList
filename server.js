const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const knex = require('./db/knex');
const cors = require("cors");


const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to My Anime Watch List!")
})

app.get('/animes', async (req, res) => {
    const animes = await knex.select().from('animes');
    console.log(animes)
    res.send(animes);
})

app.get('/animes/:id', async (req, res) => {
    const id = req.params.id;

    const anime = await knex.select().from('animes').where('id', `${id}`);
    res.send(anime);
})

app.get('/animes/status/:status', async (req, res) => {
    const status = req.params.status
    const anime = await knex.select().from('animes').where('status', `${status}`);
    res.send(anime);
})

app.post('/animes', async (req, res) => {
    await knex.select().from('animes').insert(req.body);
    res.send("Anime added");
})

app.delete('/animes/:name', async (req, res) => {
    const name = req.params.name;
    await knex.select().from('animes').where({'anime_name' : name}).del();
    res.send("Anime deleted")
})

app.patch('/animes/:name' , async (req, res) => {
    const name = req.params.name;
    const obj = req.body
    const newValue = Object.values(obj)[0];
    const keyToChange = Object.keys(obj)[0];

    if (keyToChange === "status"){
        await knex.select().from('animes').where({'anime_name' : name}).update({"status" : newValue});
    } else if (keyToChange === "anime_name"){
        await knex.select().from('animes').where({'anime_name' : name}).update({"anime_name" : newValue});
    } else if (keyToChange === "description"){
        await knex.select().from('animes').where({'anime_name' : name}).update({"description" : newValue});
    }else if (keyToChange === "duration"){
        await knex.select().from('animes').where({'anime_name' : name}).update({"duration" : newValue});
    }else if (keyToChange === "img_url"){
        await knex.select().from('animes').where({'anime_name' : name}).update({"img_url" : newValue});
    }

    res.send("Updated!")
})



// Requests for users
app.get('/users', async (req, res) => {
    const users = await knex.select().from('users');
    res.send(users)
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await knex.select().from('users').where('id', `${id}`);
    res.send(user);
})

app.post('/users', async (req, res) => {
    await knex.select().from('users').insert(req.body);
    res.send("User added");
})

app.delete('/users/:name', async (req, res) => {
    const name = req.params.name;
    await knex.select().from('users').where({'name' : name}).del();
    res.send("User deleted")
})

app.patch('/users/:id' , async (req, res) => {
    const id = req.params.id;
    const obj = req.body
    const newValue = Object.values(obj)[0];
    const keyToChange = Object.keys(obj)[0];

    if (keyToChange === "name"){
        await knex.select().from('users').where({'id' : id}).update({"name" : newValue});
    } else if (keyToChange === "email"){
        await knex.select().from('users').where({'id' : id}).update({"email" : newValue});
    }
    res.send("Updated!")
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})