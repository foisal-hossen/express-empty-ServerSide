// 1st part
const express = require("express");
const cors = require('cors');
const {MongoClient} = require('mongodb'); //Mongodb
const colors = require('colors');
const app = express();
const port = process.env.PORT || 5000;


// middle ware
app.use(cors());
app.use(express.json());

// 2nd part (mongoDB Connect)
const mongoUrl = " ";
const client = new MongoClient(mongoUrl);

async function dbConnected() {
  try {
    await client.connect();
    console.log('database connected'.yellow.italic);
    
  }catch (error) {
    console.log(error.name.bgyellow, error.massage);
   
  }
};
dbConnected();

// database and collection create


// end point