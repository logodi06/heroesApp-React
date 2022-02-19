import { Link } from 'react-router-dom';

import React from 'react'
import { heroImages } from '../../helpers/heroImages';

//const heroImages = require.context('../../assets',true); //se mando a helpers

//Se recibe un heroe pero se desestructura para poder acceder mas facil a las props
//export const HeroCard = (heroe) => {
export const HeroCard = ({id, superhero,publisher, alter_ego, first_appearance, characters}) => {
    
    //const imagePath = `/assets/${id}.jpg`; desde public assets

  return (
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
           <div className="row no-gutters">
               <div className="col-4">
                    <img src={heroImages(`./${id}.jpg`)} className="card-img" alt={superhero} />
               </div>

               <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {/* Si la dadta contiene mas de un personaje el character debe mostrar los 
                        nombres de los otros personajes, por lo tanto se realiz la siguiente expresión
                        si alter ego es diferentes  a lo que hay en character debe mostrar los characters */}
                        {
                            (alter_ego !== characters) &&
                            <p className="text-muted">{characters}</p>
                        }
                        <p className='card-text'>
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Más...
                        </Link>

                    </div>
               </div>
           </div>
        </div>
      </div>
  )
}
