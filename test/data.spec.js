//importar las funciones puras desde el data js 
import {mostrarPeliculaIndividual,filtrarDirectores,ordenarYears, ordenarScore, estadisticaData} from '../src/data.js';

const dataGhibli=[
  {
    "id":"2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93"
  },
  {
    "id" :"90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "release_date": "2002",
    "rt_score": "89"
  },
  {  
    "id" : "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "director": "Gorō Miyazaki",
    "release_date": "2006",
    "rt_score": "41"
  }

]


//funcion filtrar por director
describe('la funcion filter director deberia retornarme todas las peliculas filtradas de un mismo director', () => {
  it('is a function', () => {
    expect(typeof filtrarDirectores).toBe('function');
  });
  
  it('retornar peliculas', () => {
        expect( filtrarDirectores("Gorō Miyazaki", dataGhibli)).toEqual([
          {  
            "id" : "112c1e67-726f-40b1-ac17-6974127bb9b9",
            "title": "Tales from Earthsea",
            "director": "Gorō Miyazaki",
            "release_date": "2006",
            "rt_score": "41"
          }
      ]);
   });

});

//funcion filtrar por id


describe('Esta funcion muestra la pelicula segun el id seleccionado', () => {
  it('is a function', () => {
    expect(typeof mostrarPeliculaIndividual).toBe('function');
  });
   
  it('retornar pelicula por id', () => {
         expect( mostrarPeliculaIndividual("58611129-2dbc-4a81-a72f-77ddfc1b1b49", dataGhibli)).toEqual([
          {
            "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
            "title": "My Neighbor Totoro",
            "director": "Hayao Miyazaki",
            "release_date": "1988",
            "rt_score": "93"
          }
      ]);
       });
});


describe('Esta funcion muestra la pelicula desde la fecha mas reciente a la mas antigua', () => {
  it('is a function', () => {
    expect(typeof ordenarYears).toBe('function');
  });
   
  it('retornar pelicula por orden de fecha de lanzamiento', () => {
         expect( ordenarYears(dataGhibli)).toEqual([
          {  
            "id" : "112c1e67-726f-40b1-ac17-6974127bb9b9",
            "title": "Tales from Earthsea",
            "director": "Gorō Miyazaki",
            "release_date": "2006",
            "rt_score": "41"
          },
          {
            "id" :"90b72513-afd4-4570-84de-a56c312fdf81",
            "title": "The Cat Returns",
            "director": "Hiroyuki Morita",
            "release_date": "2002",
            "rt_score": "89"
          },
          {
            "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
            "title": "My Neighbor Totoro",
            "director": "Hayao Miyazaki",
            "release_date": "1988",
            "rt_score": "93"
          },
          {
            "id":"2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "title": "Castle in the Sky",
            "director": "Hayao Miyazaki",
            "release_date": "1986",
            "rt_score": "95"
          }
        ]);
       });
});

describe('Esta funcion muestra la pelicula desde la mas popular hasta la menos popular', () => {
  it('is a function', () => {
    expect(typeof ordenarScore).toBe('function');
  });
   
  it('retornar pelicula por popularidad', () => {
         expect( ordenarScore(dataGhibli)).toEqual([
          {
            "id":"2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "title": "Castle in the Sky",
            "director": "Hayao Miyazaki",
            "release_date": "1986",
            "rt_score": "95"
          },
          {
            "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
            "title": "My Neighbor Totoro",
            "director": "Hayao Miyazaki",
            "release_date": "1988",
            "rt_score": "93"
          },
          {
            "id" :"90b72513-afd4-4570-84de-a56c312fdf81",
            "title": "The Cat Returns",
            "director": "Hiroyuki Morita",
            "release_date": "2002",
            "rt_score": "89"
          },
          {  
            "id" : "112c1e67-726f-40b1-ac17-6974127bb9b9",
            "title": "Tales from Earthsea",
            "director": "Gorō Miyazaki",
            "release_date": "2006",
            "rt_score": "41"
          }
         ]);
       });
});


describe('Esta funcion muestra los directores y al lado su numero de peliculas', () => {
  it('is a function', () => {
    expect(typeof estadisticaData).toBe('function');
  });
   
  it('retornar los directores y su numero de peliculas realizadas', () => {
         expect( estadisticaData( dataGhibli)).toEqual(
          {
            "Hayao Miyazaki": 2,
            "Hiroyuki Morita" : 1,
            "Gorō Miyazaki" : 1
          }
      );
       });
});
