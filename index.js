// 1ST PART
const express = require("express");
const cors = require('cors');
const {MongoClient} = require('mongodb'); //Mongodb
const colors = require('colors');
const app = express();
const port = process.env.PORT || 5000;


// MIDDLE WARE
app.use(cors());
app.use(express.json());

// 2ND PART (mongoDB Connect)
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


// END POINT
app.post('/product', async (res, req) => {

});

app.listen(port, () => console.log(('server up and running'.magenta.italic)));