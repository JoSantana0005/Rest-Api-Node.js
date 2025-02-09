// Variables 
const List__Flyweight = document.getElementsByClassName('List--Flyweight')[0];
const List__Bantamweight = document.getElementsByClassName('List--Bantamweight')[0];
const List__Featherweight = document.getElementsByClassName('List--Featherweight')[0];
const List__Lightweight = document.getElementsByClassName('List--Lightweight')[0];
const List__Welterweight = document.getElementsByClassName('List--Welterweight')[0];
const List__Middleweight = document.getElementsByClassName('List--Middleweight')[0];
const List__LightHeavyweight = document.getElementsByClassName('List--SemiMediumWeight')[0];
const List__Heavyweight = document.getElementsByClassName('List--Heavyweight')[0];
const Name = document.getElementById('Title');
const Plot = document.getElementById('Plot');
const Age = document.getElementById('Age');
const record = document.getElementById('Record');
const Championship = document.getElementById('Championship');
const Weight = document.getElementById('Weight');
const Poster = document.getElementById('Imagen--Fighter')
let list = [];
const Ventana__modal = document.getElementById('Ventana--Modal');
const Close__modal = document.getElementById('Close');

// evento para cerrar la ventana Modal
Close__modal.addEventListener('click',()=>{
    Ventana__modal.close();
})

// Funcion para colocar la informacion del luchador en la ventana modal
function Info__Fighter(IndexFighter){
    const fighter = list[IndexFighter];
    Name.textContent = fighter.name;
    Plot.textContent = fighter.plot;
    Age.textContent = fighter.age;
    record.textContent = fighter.record;
    Championship.textContent = fighter.championship;
    Weight.textContent = fighter.weight;
    Poster.src = fighter.Poster;
}

// Funciones que llama a la API
async function ObtenerCategoryFlyweight(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--FlyW" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--FlyW');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
async function ObtenerCategoryBantamweight(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--bantaW" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--bantaW');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
async function ObtenerCategoryFeatherweight(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--FearW" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--FearW');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
async function ObtenerCategoryLightweight(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--LightW" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--LightW');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
async function ObtenerCategoryWelterweight(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--Welter" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--Welter');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
async function ObtenerCategoryMiddleweight(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List-Middle" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--Middle');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}
async function ObtenerCategoryLightHeavy(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--LightHeavy" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--LightHeavy');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}

async function ObtenerCategoryHeavy(category){
    try{
        const respuesta = await fetch(`http://localhost:2500/Fighter?weight=${category}`);
        if(respuesta.status == 200){
            const CategoryFighter = await respuesta.json();
            console.log(CategoryFighter);
            let content = '';
            list = CategoryFighter.map((Fighter,index) =>{
                content += `
                    <div class="List--Heavy" data-index= ${index}>
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
            document.getElementsByClassName(`List--${category}`)[0].innerHTML = content;
            // Abrir la ventana Modal para mostrar la informacion del luchador
            const Fighter = document.querySelectorAll('.List--Heavy');
            Fighter.forEach((element) =>{
                element.addEventListener('click',()=>{
                    if(Ventana__modal){
                        Ventana__modal.showModal();
                        const IndexFighter = element.getAttribute('data-index');
                        Name.textContent = CategoryFighter[IndexFighter].name;
                        Plot.textContent = CategoryFighter[IndexFighter].plot;
                        Age.textContent = CategoryFighter[IndexFighter].age;
                        record.textContent = CategoryFighter[IndexFighter].record;
                        Championship.textContent = CategoryFighter[IndexFighter].championship;
                        Weight.textContent = CategoryFighter[IndexFighter].weight;
                        Poster.src = CategoryFighter[IndexFighter].Poster;
                    }
                })
            })
        }
    }catch(error){
        console.error(`Hubo un error: ${error}`);
    }
}

ObtenerCategoryFlyweight('Flyweight');
ObtenerCategoryBantamweight('Bantamweight');
ObtenerCategoryFeatherweight('Featherweight');
ObtenerCategoryLightweight('Lightweight');
ObtenerCategoryWelterweight('Welterweight');
ObtenerCategoryMiddleweight('Middleweight');
ObtenerCategoryLightHeavy('Light Heavyweight');
ObtenerCategoryHeavy('Heavyweight');