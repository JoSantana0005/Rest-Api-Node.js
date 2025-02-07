const Ventana__modal = document.getElementById('Ventana--Modal');
const Cerrar__Modal = document.getElementById('Close');
const Name = document.getElementById('Title');
const Plot = document.getElementById('Plot');
const Age = document.getElementById('Age');
const record = document.getElementById('Record');
const Championship = document.getElementById('Championship');
const Weight = document.getElementById('Weight');
const Poster = document.getElementById('Imagen--Fighter')
let List__Fighters = [];

Cerrar__Modal.addEventListener('click',Cerrar_ventana);

// Function para cerrar la ventana modal
function Cerrar_ventana(){
    Ventana__modal.close();
}
// Funcion para colocar la informacion del luchador en la ventana modal
function Info__Fighter(IndexFighter){
    Name.textContent = List__Fighters[IndexFighter].name;
    Plot.textContent = List__Fighters[IndexFighter].plot;
    Age.textContent = List__Fighters[IndexFighter].age;
    record.textContent = List__Fighters[IndexFighter].record;
    Championship.textContent = List__Fighters[IndexFighter].championship;
    Weight.textContent = List__Fighters[IndexFighter].weight;
    Poster.src = List__Fighters[IndexFighter].Poster;
}
// Funcion para llamar la api
async function ObtenerFighter(){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter`);
        if(respuesta.status == 200){
            const Fighters = await respuesta.json();
            console.log(Fighters)
            let content = '';
            List__Fighters = Fighters.map((Fighter,index) =>{
                content += `
                <div class="Fighter" data-index= ${index}>
                    <img src="${Fighter.Poster}" alt="Fighter">
                    <h4>${Fighter.nickname}</h4>
                </div>
                `
                return{
                    name: Fighter.name,
                    nickname: Fighter.nickname,
                    plot: Fighter.plot,
                    age: Fighter.age,
                    record: Fighter.record,
                    championship: Fighter.championship,
                    weight: Fighter.weight,
                    Poster: Fighter.Poster
                }
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
                            Info__Fighter(index);
                        }
                    })
                })
            }
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
// Funcion para buscar un luchador
const Search = document.getElementById('Search--fighter');
Search.addEventListener('input',(e) =>{
    const value = e.target.value.trim();
    let buscador = ''
    if(value == ''){
        ObtenerFighter();
    }else{
        document.getElementsByClassName('List--Fighter')[0].innerHTML = '';
        List__Fighters.forEach((Fighter,index) =>{
            if(Fighter.nickname.toLowerCase().includes(value.toLowerCase())){
                buscador += `
                <div class="Fighter" data-index= ${index}>
                    <img src="${Fighter.Poster}" alt="Fighter">
                    <h4>${Fighter.nickname}</h4>
                </div>
                `
            }
        })
        if(buscador !== ''){
            document.getElementsByClassName('List--Fighter')[0].innerHTML = buscador;
            // Abrir la ventana Modal con la información del luchador buscado
            const Fighter_Search = document.querySelectorAll('.Fighter');
            Fighter_Search.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Info__Fighter(IndexFighter);
                    }
                })
            })
        }
    }
})
ObtenerFighter();