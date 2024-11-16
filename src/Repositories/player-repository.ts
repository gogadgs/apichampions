import { PlayerModel } from "../Models/Player-model";
import { StatisticsModel } from "../Models/statistics-model";


 const dataBase: PlayerModel[]=[
    {
        id:1,
        name:"Messi",
        
    },
    {
        id:2,
        name:"Cristiano Ronaldo",
    }
];

export const findAllPlayer = async (): Promise<PlayerModel[]>=>{
    return dataBase;
};

export const findPlayerById = async (id:number):Promise<PlayerModel | undefined>=>{
    return dataBase.find((player) =>player.id == id);
};

export const insertPlayer  = async (player:PlayerModel)=>{
        dataBase.push(player);
}

export const deleteOnePlayer = async(id:number)=>{
    const index = dataBase.findIndex(player => player.id === id);
    if(index !== -1){
        dataBase.splice(index, 1);
        return true

    }

    return false;
}

export const findAndModifyPlayer = async(id:number,statistics:StatisticsModel):Promise<PlayerModel>=>{
        const playerIndex = dataBase.findIndex(player => player.id === id);
        if(playerIndex !== -1){
            dataBase[playerIndex].statistics = statistics;
        }
        return dataBase[playerIndex];
}