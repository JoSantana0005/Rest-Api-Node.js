
import { ValidateFighter, ValidateFighterUpdate } from "../Schema.mjs";
export class FighterController{
    constructor({fighterModel}){
        this.fighterModel = fighterModel;
    }

    // Funcion para obtener todos los luchadores
    GetALL = async (req,res) =>{
        try{
            const {weight,name,champion} = req.query;
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
            }else if(champion){
                
                const fighters = await this.fighterModel.getChampions({champion});
                if(fighters){
                    return res.status(200).json(fighters);
                }
            }
            
            const fighters = await this.fighterModel.getALL();
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
            const result = ValidateFighter(req.body);
            if(result.success){
                const fighter = await this.fighterModel.create({fighter: result.data});
                return res.status(201).json(fighter);
            }else{
                return res.status(400).json(result.error);
            }
        }catch(error){
            return res.status(500).json({error: "Error al crear el luchador"});
        }
    }

    // Funcion para eliminar un luchador
    Delete = async (req,res)=>{
        try{
            const {id} = req.params;
            const FighterDelete = await this.fighterModel.delete({id});
            if(FighterDelete){
                return res.status(200).json(FighterDelete);
            }
        }catch(error){
            return res.status(404).json({error: "Luchador no encontrado"});
        }
    }
}