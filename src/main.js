import dataGhibli from './data.js';
//buscar las imagenes con enlaces rotos



//mostrar todos
const tabla = document.querySelector("#lista-usuarios tbody");
mostrartodas();
function mostrartodas() {
   const array = dataGhibli.datosTodasPeliculas();
   for (let i = 0; i < array.length; i++) {
      const row = document.createElement("tr");
      row.innerHTML += `
                   <td class="row">${array[i].title}</td>
                  <td class="row" >${array[i].description}</td>
                  <td class="row">${array[i].director}</td>
                  
                  <button class="select" id = "${array[i].id}" >Ver mas...</button>                    
                  `;
      tabla.appendChild(row);
    
  }
}

//este es el modal con los detalles de las peliculas al dar click

const modal = document.getElementById("modal");
const abrir = document.querySelectorAll(".select");
const cerrar = document.getElementById("close");
const buttons = document.querySelectorAll("button");

abrir.forEach(abierto =>{
     abierto.addEventListener("click", () => {
      modal.style.display = "block";
    });
})
  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});

mostrarIndividual();
function mostrarIndividual() {
  for (let i = 0; i < buttons.length; i++) {
    const boton = buttons[i];
    let idCard;
    const pagina = document.getElementById("muestra");
    const personajes = document.getElementById("personajes");
    const location = document.getElementById("locacion");
    const vehiculos = document.getElementById("vehiculos");
    boton.addEventListener("click", () => {
      idCard = boton.id;
      const id = dataGhibli.mostrarPeliculaIndividual(idCard);
      
      id.forEach(element => {
        pagina.innerHTML = `
        <img src="${element.poster}" alt="">
        <p>${element.title}</p>
        <p>${element.director}</p>
        <p>${element.description}</p>
        <p>${element.producer}</p>
        <p>${element.release_date}</p>
        <p>${element.rt_score}</p>
         
        `;
          personajes.innerHTML = "";
          element.people.forEach(persona =>{
          personajes.innerHTML +=
           `<div class = "cont-people">
             <p>${persona.name}</p>
             <p>${persona.gender}</p>
             <p>${persona.age}</p>
             <p>${persona.eye_color}</p>
            <p>${persona.hair_color}</p>
            <p>${persona.specie}</p>
           </div>
           ` 
          });
          
          location.innerHTML = ""
          element.locations.forEach(locacion =>{
          
            location.innerHTML +=
            `<div class = "cont-locacion">
            <p>${locacion.name}</p>
            <p>${locacion.climate}</p>
            <p>${locacion.terrain}</p>
            <p>${locacion.surface_water}</p>
            
            </div>`

          });
          
          vehiculos.innerHTML = ""
          element.vehicles.forEach(vehiculo =>{
            vehiculos.innerHTML +=
            `<div class = "cont-vehiculos">
            <p>${vehiculo.name}</p>
            <p>${vehiculo.description}</p>
            <p>${vehiculo.vehicle_class}</p>
            <p>${vehiculo.length}</p>
            <p>${vehiculo.pilot.name}</p>
                     
            </div>`
          });
        });
       });
  
   }
}



