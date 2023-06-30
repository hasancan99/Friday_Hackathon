const express = require('express');
const cors = require('cors');

const logRoutes = require('./middleware/logger');
const userRoutes = require('./routes/user')
const diaryRoutes = require('./routes/diary')


const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.json({
        title: "Bridget Jones' Diary",
        description: "Create and manage your own personal secure Diary"
    })
})

app.use(logRoutes);
app.use('/users', userRoutes)
app.use('/diary', diaryRoutes)




module.exports = app