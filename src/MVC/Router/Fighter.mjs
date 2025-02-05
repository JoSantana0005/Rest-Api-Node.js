import {Router} from 'express';
import { FighterController } from '../Controller/Fighter.mjs';

const route = Router();
export const FighterRoute = route;

// GET
FighterRoute.get('/',FighterController);
FighterRoute.get('/:id',FighterController);