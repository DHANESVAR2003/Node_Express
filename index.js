import express from 'express';
import bodyparser from 'body-parser';
import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use('/users', usersRouter)

app.get('/', (req,res) =>{res.send('hello from home page')});

app.listen(PORT, ()=> console.log(`server running on port: http://localhost:${PORT}`));