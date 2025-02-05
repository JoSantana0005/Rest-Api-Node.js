import zod from 'zod';
export const FighterSchema = zod.object({
    name: zod.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser un string"
    }).nonempty(),
    
    nickname: zod.string({
        required_error: "El apodo es requerido",
        invalid_type_error: "El apodo debe ser un string"
    }).nonempty(),
    
    weight: zod.enum(['Flyweight','Bantamweight','Featherweight',
        'Lightweight','Welterweight','Middleweight',
        'Semimediumweight','Heavyweight']).array(),
    
    record: zod.string({
        required_error: "El record es requerido",
        invalid_type_error: "El record debe ser un string"
    }).nonempty(),
    
    age: zod.number({
        required_error: "La edad es requerida",
        invalid_type_error: "La edad debe ser un numero"
    }).int().positive(),
    
    country: zod.string({
        required_error: "El pais es requerido",
        invalid_type_error: "El pais debe ser un string"
    }).nonempty(),
    
    championship: zod.enum(["UFC Flyweight Champion","UFC Bantamweight Champion","UFC Featherweight Champion",
        "UFC Lightweight Champion","UFC Welterweight Champion","UFC Middleweight Champion",
        "UFC Semimediumweight Champion","UFC Heavyweight Champion"]).array(),
    
        plot: zod.string({
        required_error: "La trama es requerida",
        invalid_type_error: "La trama debe ser un string"
    }).nonempty(),
    
    champion: zod.boolean({
        required_error: "El campeon es requerido",
        invalid_type_error: "El campeon debe ser un booleano"
    }),

    Poster: zod.string({
        required_error: "El poster es requerido",
        invalid_type_error: "El poster debe ser un string"
    }).url(),
})

export function ValidateFighter(fighter){
    return FighterSchema.safeParse(fighter);
}

export function ValidateFighterUpdate(fighter){
    return FighterSchema.partial().safeParse(fighter);
}