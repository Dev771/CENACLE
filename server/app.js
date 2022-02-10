import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; 

import postRoutes from './routes/postRoutes.js';
import tagsRoutes from './routes/tagsRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(bodyParser.json({ extended: true, limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/tags', tagsRoutes);

const PORT = process.env.PORT || 8080;
const ConnectionURL = 'mongodb+srv://Dev771:763200%40De@cluster0.3i0ib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(ConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log("Server Started At : ", PORT);
    }))
    .catch((error) => console.log(error));