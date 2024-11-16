import { Request, Response } from "express";
import { getClubsService } from "../Services/List-Clubs;";

export const getClubs = async (request:Request,response:Response)=>{
    const res = await getClubsService();

    response.status(res.statusCode).json(res.body);
    return res;
}