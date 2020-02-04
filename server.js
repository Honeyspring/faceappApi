const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const Register= require('./controllers/register');
const SignIn= require('./controllers/signIn');
const Rank= require('./controllers/rank');
const ImageUrl= require('./controllers/image');
const Profile= require('./controllers/profile');
require('dotenv').config();
const knex = require('knex')({
    client: 'pg',
    connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
    }

    
  });

knex.select('*').from ('users').then(data=>{
    console.log(data);
});

const app = express();
app.use(bodyParser.json()); //middleware allows getting request body
app.use(cors()); //prevents browser error due to use of http during development
app.get('/',(req,res)=>{
res.send('database connected'); 
})
app.post('/SignIn',(req,res)=>{SignIn.signInHandler(req,res,knex,bcrypt)})
app.post('/Register',(req,res)=>{Register.registerHandler(req,res,knex,bcrypt)});
app.get('/Profile/:id',(req,res)=>{Profile.profileHandler(req,res,knex)});
app.put('/Rank',(req,res)=>{Rank.imageHandler(req,res,knex)});
app.post('/ImageUrl',(req,res)=>{ImageUrl.apiHandler(req,res)});

app.listen(process.env.PORT || 3000,()=>{
   
    console.log(`app is running on port ${process.env.PORT}`);
})
