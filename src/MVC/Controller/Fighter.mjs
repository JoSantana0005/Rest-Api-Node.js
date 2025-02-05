import { FighterModel } from "../Models/Fighter.mjs";

export class FighterController{
    constructor({fighterModel}){
        this.fighterModel = fighterModel;
    }

    // Funcion para obtener todos los luchadores
    GetALL = async (req,res) =>{
        try{
            const {weight,name} = req.query;
            if(weight){
                
                const fighters = await this.fighterModel.getByWeight({weight});
                if(fighters){
                    return res.status(200).json(fighters);
                }
            
            }else if(name){
                
                const fighter = await this.fighterModel.getByName({name});
                if(fighter){
                    return res.status(200).json(fighter);
                }
            }
            
            const fighters = await this.fighterModel.GetALL();
            return res.status(200).json(fighters);
        }
        catch{
            return res.status(500).json({error: "Error al obtener los luchadores"});
        }
    }
    // Obtener un luchador por su id
    GetByID = async (req,res) =>{
        try{
            const {id} = req.params;
            const fighter = await this.fighterModel.getByID({id});
            if(fighter){
                return res.status(200).json(fighter);
            }
        }
        catch{
            return res.status(404).json({error: "Luchador no encontrado"});
        }
    }
    // Funcion para crear un nuevo luchador
    Create = async (req,res) =>{
        try{
            const {}
        }
    }
}