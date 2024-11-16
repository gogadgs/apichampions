import { findAllClubs } from "../Repositories/clubs-repository";
import { BadRequest, noContent, ok } from "../utils/http-helper"

export const getClubsService = async () =>{

  const data = await findAllClubs();
    let  response = null;

    if(Object.keys(data).length === 0){
        response = noContent();
    }else if(Object.keys(data).length === -1){
        response = BadRequest();
    }else{
        response =  ok(data);

    }
    return response;
}