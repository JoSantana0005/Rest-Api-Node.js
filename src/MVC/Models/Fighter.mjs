import { READJSON } from "../Utils.mjs";
const Fighters = READJSON("./Fighter.json");

export class FighterModel{
    // Funcion para obtener todos los luchadores
    static getALL = async () =>{
        return Fighters;
    }

    // Funcion para obtener un luchador por su id
    static getByID = async ({id}) =>{
        if(id){
            return Fighters.find(
                Fighter => Fighter.id == parseInt(id))
        }
        return Fighters;
    }

    // Funcion para obtener a los lucahadores segun su categoria de peso
    static getByWeight = async ({weight})=>{
        if(weight){
            return Fighters.filter(
                Fighter => Fighter.weight.includes(weight)
            )
        }
        return Fighters;
    }

    // Funcion para obtner a los luchadores segun los titulos ganados
    static getChampions = async ({championship}) =>{
        if(championship){
            return Fighters.filter(
                Fighter => Fighter.championship.includes(championship)
            )
        }
        return Fighters;
    }

    // Funcion que obtiene a los luchadores que son campeon
    static getChampion = async ({champion}) =>{
        if(champion){
            const isChampion = champion == "true" ? true : false;
            return Fighters.filter(
                Fighter => Fighter.champion == isChampion
            )
        }
        return Fighters;
    }
    // Funcion para obtener un luchador por su nombre
    static getByName = async ({name}) =>{
        if(name){
            return Fighters.find(
                Fighter => Fighter.name.toLowerCase() == name.toLowerCase()
            )
        }
        return Fighters;
    }

    // Funcion para crear un nuevo luchador
    static create = async ({Fighter}) =>{
        if(Fighter){
            const NewFighter = {
                id: Fighters.length + 1,
                ...Fighter
            }
            Fighters.push(NewFighter);
            return NewFighter;
        }
        else{
            return {error: "Error al crear el luchador"};
        }
    }

    // Funcion para eliminar un luchador
    static delete = async ({id}) =>{
        if(id){
            const index = Fighters.findIndex(Fighter => Fighter.id == parseInt(id));
            if(index !== -1){
                Fighters.splice(index,1);
                return {message: "Luchador eliminado"};
            }else{
                return {error: "Luchador no encontrado"};
            }
        }
    }
}