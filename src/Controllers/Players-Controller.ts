import {  Request, Response } from "express";
import { createPlayerService, DeleteService, getPlayerByIdService, getPlayerService, PatchPlayerService } from "../Services/List-Player";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../Models/statistics-model";

export const getPlayer = async (request:Request,response:Response)=>{
    const httpResponse = await getPlayerService();
  
    response.status(httpResponse.statusCode).json(httpResponse.body);
 }

 export const getPlayerById = async (request:Request,response:Response)=>{
        const id = parseInt(request.params.id);
        const httpResposta = await getPlayerByIdService(id);
        response.status(httpResposta.statusCode).json(httpResposta.body);
 }

 export const postPlayer = async (request:Request,response :Response)=>{
       const  bodyValue = request.body;

       const httpResponse = await createPlayerService(bodyValue);
       
       if(httpResponse){
             response.status(httpResponse.statusCode).json(httpResponse.body);

       }else{
            const res = await  noContent();
            response.status(res.statusCode).json(res.body);
       }
       console.log(bodyValue);
 };
 export const DeletePlayer = async (request:Request,response:Response)=>{
                  const id  = parseInt(request.params.id);
                  const httpResponse = await DeleteService(id);
                  response.status(httpResponse.statusCode).json(httpResponse.body);
 }

 export const PatchPlayer = async(request:Request , response : Response) =>{
      const id = parseInt(request.params.id);
      const bodyValue : StatisticsModel = request.body;
      const httpResponse  = await PatchPlayerService(id , bodyValue);
      response.status(httpResponse.statusCode).json(httpResponse.body);
 }