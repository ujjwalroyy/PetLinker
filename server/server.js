require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const AdminRoute = require('./Routes/AdminRoute')
const cors = require('cors');
const path = require('path');

const app = express();
const corsOptions = {
    origin: [
      'https://pet-linker.vercel.app',
      'http://localhost:3000'
    ],
  };
  
app.use(cors(corsOptions));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(petRouter)
app.use('/form', AdoptFormRoute)
app.use('/admin', AdminRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to DB');
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })