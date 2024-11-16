import express,{ json} from "express";
import {rotas} from "./Routes/Routes";
import cors  from "cors";


export const createApp = ()=>{
const app = express();
app.use(json())

app.use("/api",rotas.getJogador);
app.use("/api",rotas.getClubes);
app.use("/api",rotas.getPlayerById);

const corsOrigins = {
    origin:["http://localhost/4000/api/","http://localhost/3000/api/"],
    methods:["GET","POST"],
};

app.use(cors(corsOrigins));


 return app;
}
