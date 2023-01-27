import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app=express();
const PORT =5500;

app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/',(req ,res)=>{
    console.log('[TEST]!');

    res.send('hello from homepage..');
});

app.listen(PORT,()=> console.log(`server is running on port:http://localhost:${PORT}`));