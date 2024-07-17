const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // to parse json data


const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL)

app.get('/', (req, res) => {
    res.send('API is running.... Properly');
});

app.use('/api/user', userRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running on port ${PORT}`));
