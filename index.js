// 1ST PART
const express = require("express");
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb'); //Mongodb
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;


// MIDDLE WARE
app.use(cors());
app.use(express.json());

// 2ND PART (mongoDB Connect)
const mongoUrl = " ";
const client = new MongoClient(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});


async function dbConnect() {
  try {
    await client.connect();
    console.log('database connected'.yellow.italic);
    
  }catch (error) {
    console.log(error.name.bgyellow, error.massage);
   
  }
};
dbConnect();

// database and collection create


// END POINT
app.post('/', async (res, req) => {

});

// 3RD PART
app.listen(port, () => console.log(('server up and running'.magenta.italic)));