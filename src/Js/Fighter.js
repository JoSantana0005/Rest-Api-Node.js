// Funcion para llamar la api
async function ObtenerFighter(){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter`);
        if(respuesta.status == 200){
            const Fighters = await respuesta.json();
            console.log(Fighters)
            let content = '';
            Fighters.forEach((Fighter,index) =>{
                content += `
                <div class="Fighter" data-index= ${index}>
                    <img src="${Fighter.Poster}" alt="Fighter">
                    <h4>${Fighter.nickname}</h4>
                </div>
                `
            })
            document.getElementsByClassName('List--Fighter')[0].innerHTML = content;
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
ObtenerFighter();