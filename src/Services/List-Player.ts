import { PlayerModel } from "../Models/Player-model";
import { deleteOnePlayer, findAllPlayer, findAndModifyPlayer, findPlayerById, insertPlayer } from "../Repositories/player-repository";
import { BadRequest, created, noContent, ok } from "../utils/http-helper";
import { StatisticsModel } from "../Models/statistics-model";
import { HttpResponse } from "../Models/HttpResponse-model";


export const getPlayerService  = async ():Promise<HttpResponse> =>{
    const data =await findAllPlayer();
    let response = null;
    if(data){
        response =  await ok(data);
    }else{
        response = await noContent()
    }
    return response;

};


export const getPlayerByIdService = async(id:number)=>{
        const data = await findPlayerById(id);
        let response = null;

        data?response= await ok(data): response = await noContent();
       /*  if(data){
            response = await ok(data);
        }else{
            response = await noContent();
        }; */

        return response;

}

export const createPlayerService = async(player:PlayerModel):Promise<HttpResponse | any>=>{
        let response = null;
      if(Object.keys(player).length !== 0){
         await insertPlayer(player);
         response = await created();
      }else if(Object.keys(player).length === 0){
        response = await  noContent();
      }else{
        response = await  BadRequest;
      }

      return response;
}


export const DeleteService = async(id:number):Promise<HttpResponse>=>{
    let response = null;
    const isDelete =  await deleteOnePlayer(id);
    
    if(isDelete){
        response = ok({
            message:"jogador excluido"
        });

    }else{
        response = await BadRequest();
    }
    



    return response;
}

export const PatchPlayerService = async(id:number,statistics:StatisticsModel):Promise<HttpResponse>=>{
        const data = await  findAndModifyPlayer(id,statistics);
        let response = null;

      if(Object.keys(data).length === 0){
        response =await BadRequest();
      }else{
        response =  await ok(data);
      }

        return response;
}