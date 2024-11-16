
import { createApp } from "./App";


const app =  createApp();

const porta = process.env.PORT;



app.listen(porta,()=>{
    console.log(`🔥🔥Server  running localhost at port ${porta}`)
});