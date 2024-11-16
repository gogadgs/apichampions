import { ClubModel } from "../Models/Club-model";
import fs  from "fs/promises";



export const findAllClubs = async ():Promise<ClubModel[]>=>{
    const data = await fs.readFile("./src/Data/Clubs.json","utf-8");

    const clubs:ClubModel[] =JSON.parse(data);

    return clubs;
}