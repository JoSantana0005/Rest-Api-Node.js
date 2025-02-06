import express, {json} from 'express'
import cors from 'cors'
import { FighterRoute } from './src/MVC/Router/Fighter.mjs';

const app = express();
const PORT = process.env.PORT ?? 2500

app.use(json());
app.use(cors());
app.use('/Fighter', FighterRoute);
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})