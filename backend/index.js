const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const mongodb=require('mongodb');

const PORT= 8001;
const app=express();

//configurations
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());    
app.use(morgan('combined'));
dotenv.config();

//initializing the server 

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

//connecting to the database