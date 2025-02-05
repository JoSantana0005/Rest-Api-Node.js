import express, {json} from 'express'


const app = express();
const PORT = process.env.PORT ?? 2500

app.use(json());
app.use('/Fighter',);
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})