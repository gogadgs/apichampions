import { HttpResponse } from "../Models/HttpResponse-model"


export const ok = async (data:any):Promise<HttpResponse>=>{
    return{
        statusCode:200,
        body:data,
    }
}

export const noContent = async ():Promise<HttpResponse>=>{
    return{
        statusCode:204,
        body:null,
    };
};


export const BadRequest  = async ():Promise<HttpResponse>=>{
    return{
        statusCode: 400,
        body:"Erro apresentado",
    }
}

export const created = async ():Promise<HttpResponse>=>{
    return{
        statusCode:201,
        body:{
            message:"successful"
        }
    }
}

