const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log("Error connecting to MongoDB", error);
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})