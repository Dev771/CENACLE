import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { createRequire } from "module";
const require = createRequire(import.meta.url); // construct the require method
const config = require("./config/config.json"); 

import postRoutes from './routes/postRoutes.js';
import tagsRoutes from './routes/tagsRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
 
const app = express();

app.use(bodyParser.json({ extended: true, limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());


app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/tags', tagsRoutes);
app.use('/user', userRoutes);
app.use('/message', messageRoutes);


app.get('/', (req,res) => {
    res.send('APP IS RUNNING');
});

app.use( (err, req, res, next) => {
    console.log("error nigga what?:" + err)
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.json('error', { error: err })
  })

const PORT = process.env.PORT || 8080;
const ConnectionURL = config.mongoose;

mongoose.connect(ConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log("Server Started At : ", PORT);
    }))
    .catch((error) => console.log(error));