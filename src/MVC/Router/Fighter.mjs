import {Router} from 'express';
import { FighterModel } from "../Models/Fighter.mjs";
import { FighterController } from '../Controller/Fighter.mjs';

const route = Router();
export const FighterRoute = route;

// Inicio la clase de Controladores
const fightercontroller = new FighterController({fighterModel: FighterModel});

// GET
FighterRoute.get('/',fightercontroller.GetALL);
FighterRoute.get('/:id',fightercontroller.GetByID);

// POST
FighterRoute.post('/',fightercontroller.Create);

// DELETE
FighterRoute.delete('/:id',fightercontroller.Delete);