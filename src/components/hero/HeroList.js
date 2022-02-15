
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


//Se va a recibir las props, que en este caso es publisher
export const HeroList = ({publisher}) => {
  
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

    //se manda llamar la función que trae todos los heroes segun el publisher
    //arriba esta la llamada a la función pero con el uso de useMemo
    //const heroes = getHeroesByPublisher(publisher);
  
    return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {/* Muestra la lista de los superheroes */}
            {/* {
                heroes.map( heroe => (
                    <li key={heroe.id}>
                        { heroe.superhero}
                    </li>
                ))
            } */}

            {
                heroes.map( heroe => (
                    <HeroCard 
                        key={heroe.id}  
                        //Para mandar todos los props que el HeroCard esta esperando podemos desestructurar
                        //todas las propiedades que vienen en heroe
                        {...heroe}
                    />
                       
                ))
            }
  
    </div>
  )
}
