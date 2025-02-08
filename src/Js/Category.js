// Variables 
const List__Flyweight = document.getElementsByClassName('List--Flyweight')[0];
const List__Bantamweight = document.getElementsByClassName('List--Bantamweight')[0];
const List__Featherweight = document.getElementsByClassName('List--Featherweight')[0];
const List__Lightweight = document.getElementsByClassName('List--Lightweight')[0];
const List__Welterweight = document.getElementsByClassName('List--Welterweight')[0];
const List__Middleweight = document.getElementsByClassName('List--Middleweight')[0];
const List__LightHeavyweight = document.getElementsByClassName('List--SemiMediumWeight')[0];
const List__Heavyweight = document.getElementsByClassName('List--Heavyweight')[0];
let list_Fighter = [];
const Ventana__modal = document.getElementById('Ventana__modal');
const Close__modal = document.getElementById('Close');

// evento para cerrar la ventana Modal
Close__modal.addEventListener('click',()=>{
    Ventana__modal.close();
})

// Funcion para colocar la informacion del luchador en la ventana modal
function Info__Fighter(IndexFighter){
    Name.textContent = list_Fighter[IndexFighter].name;
    Plot.textContent = list_Fighter[IndexFighter].plot;
    Age.textContent = list_Fighter[IndexFighter].age;
    record.textContent = list_Fighter[IndexFighter].record;
    Championship.textContent = list_Fighter[IndexFighter].championship;
    Weight.textContent = list_Fighter[IndexFighter].weight;
    Poster.src = list_Fighter[IndexFighter].Poster;
}

// Funcion que llama a la API
async function ObtenerCategory(category,list){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List" data-index= ${index}>
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
            list.innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Info__Fighter(IndexFighter);
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}

// Evento para buscar un luchador
const Search__Fighter = document.getElementById('Search--fighter');
Search__Fighter.addEventListener('input',(e)=>{
    const value = e.target.value.trim();
    let content = '';
    if(value == ''){
        ObtenerCategory('Flyweight',List__Flyweight);
        ObtenerCategory('Bantamweight',List__Bantamweight);
        ObtenerCategory('Featherweight',List__Featherweight);
        ObtenerCategory('Lightweight',List__Lightweight);
        ObtenerCategory('Welterweight',List__Welterweight);
        ObtenerCategory('Middleweight',List__Middleweight);
        ObtenerCategory('Light Heavyweight',List__LightHeavyweight);
        ObtenerCategory('Heavyweight',List__Heavyweight);
    }else{
        document.getElementsByClassName('List--Flyweight')[0].innerHTML = '';
        document.getElementsByClassName('List--Bantamweight')[0].innerHTML = '';
        document.getElementsByClassName('List--Featherweight')[0].innerHTML = '';
        document.getElementsByClassName('List--Lightweight')[0].innerHTML = '';
        document.getElementsByClassName('List--Welterweight')[0].innerHTML = '';
        document.getElementsByClassName('List--Middleweight')[0].innerHTML = '';
        document.getElementsByClassName('List--LightHeavyweight')[0].innerHTML = '';
        document.getElementsByClassName('List--Heavyweight')[0].innerHTML = '';
        list_Fighter.forEach((Fighter,index) =>{
            if(Fighter.nicname.toLowerCase().includes(value.toLowerCase())){
                content += `
                    <div class="List" data-index= ${index}>
                        <img src="${Fighter.Poster}" alt="Fighter">
                        <h4>${Fighter.nickname}</h4>
                    </div>
                `
            }
        })
        if(content !== ''){
            document.getElementsByClassName('List--Flyweight')[0].innerHTML = content;
            const Fighter = document.querySelectorAll('.List');
            Fighter.forEach((element) =>{
                element-addEventListener('click',()=>{
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