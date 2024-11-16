import { Router } from "express";
import { DeletePlayer, getPlayer, getPlayerById, PatchPlayer, postPlayer } from "../Controllers/Players-Controller";
import { getClubs } from "../Controllers/Clubs-Controller";


 const router = Router();

export const rotas = {
    getJogador: router.get("/players", getPlayer),
    getClubes: router.get("/clubs", getClubs),
    getPlayerById:router.get("/players/:id",getPlayerById),
    PostPlayer:router.post("/players",postPlayer),
    DeletePlayer: router.delete("/players/:id",DeletePlayer),
    PatchPlayer : router.patch("/players/:id",PatchPlayer),

    ClubRouter: router.get("/clubs",getClubs)
};
/* router.get("/api/player",getPlayer) */


