const Ventana__modal = document.getElementById('Ventana--Modal');
const Cerrar__Modal = document.getElementById('Close');
const Name = document.getElementById('Title');
const Plot = document.getElementById('Plot');
const Age = document.getElementById('Age');
const record = document.getElementById('Record');
const Championship = document.getElementById('Championship');
const Weight = document.getElementById('Weight');
const Poster = document.getElementById('Imagen--Fighter')


Cerrar__Modal.addEventListener('click',Cerrar_ventana);

// Function para cerrar la ventana modal
function Cerrar_ventana(){
    Ventana__modal.close();
}

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
            // Abrir la ventana Modal
            const Fighter = document.querySelectorAll('.Fighter');
            if(Fighter){
                Fighter.forEach((element) =>{
                    element.addEventListener('click',()=>{
                        if(Ventana__modal){
                            Ventana__modal.showModal();
                            const index = element.getAttribute('data-index');
                            Name.textContent = Fighters[index].name;
                            Plot.textContent = Fighters[index].plot;
                            Age.textContent = Fighters[index].age;
                            record.textContent = Fighters[index].record;
                            Championship.textContent = Fighters[index].championship;
                            Weight.textContent = Fighters[index].weight;
                            Poster.src = Fighters[index].Poster;
                        }
                    })
                })
            }
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
ObtenerFighter();