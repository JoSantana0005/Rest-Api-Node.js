import { READJSON } from "../Utils.mjs";
const Fighters = READJSON("./Fighter.json");

export class FighterModel{
    // Funcion para obtner todos los luchadores
    static async getALL(){
        return Fighters;
    }
    // Obtener un luchador por su ID
    static async getByID({id}){
        if(id){
            return Fighters.find(fighter => fighter.id == parseInt(id));
        }
        return Fighters;
    }

    // Obtener a lucahadores segun su categoria de peso
    static async getByWeight({weight}){
        if(weight){
            return Fighters.filter(fighter => 
                fighter.weight.includes(weight)
            )
        }
        return Fighters;
    }

    // Obtener a los lucahadores que son campeones
    static async getChampions({champion}){
        if(champion){
            return Fighters.filter(fighter => fighter.champion == champion);
        }
        return Fighters;
    }

    // Obtener a un luchador por su nombre
    static async getByName({name}){
        if(name){
            return Fighters.find(fighter => fighter.name.toLowerCase() == name.toLowerCase());
        }
        return Fighters;
    }

    // Crear un nuevo luchador

    static async create({fighter}){
        if(fighter){
            const newFighter = {
                id: Fighters.length + 1,
                ...fighter
            }
            Fighters.push(newFighter);
            return newFighter;
        }
        else{
            return {error: "No se ha enviado un luchador"}
        }
    }

    // Eliminar a un luchador por su id
    static async delete({id}){
        if(id){
            const index = Fighters.findIndex(fighter =>
                fighter.id == parseInt(id)
            )
            if(index !== -1){
                Fighters.splice(index,1);
                return {message: "Luchador eliminado"}
            }
            else{
                return {error: "Luchador no encontrado"}
            }
        }else{
            return {error: "No se ha enviado un id"}
        }
    }
}