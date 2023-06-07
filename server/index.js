const express = require('express');
//const mongoose = require('mongoose');
const connectDB = require('./db');
const authRouter = require('./routes/auths');
const userRouter = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);


connectDB()

  .then(() => {

    // Start the server

    const PORT = 3000; // Choose a port number

    app.listen(PORT, () => {

      console.log(`Server listening on port ${PORT}`);

    });

  })

  .catch((error) => {

    console.error('Error connecting to MongoDB:', error);
    // Handle the error, e.g., by exiting the process
    
    process.exit(1);
  
  });


