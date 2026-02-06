import express from 'express';
import 'dotenv/config';
import route from './routes/todo.routes.js';
import  { testHandler}  from './middleware/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/v1',route)

// routes 
app.get('/health',testHandler,(req,res)=>{
    const server = {
        "port": process.env.port,
        "app_name":process.env.APP,
        "app_mode":process.env.NODE_ENV
    }
    res.status(200).send(server);
});





function start() {
    try {
        const port = process.env.PORT;
        console.log(port)
        app.listen(port,() => {
            console.log("starting ");
        });
    } catch (error) {
        console.log(error.message);
    }
}

start();


