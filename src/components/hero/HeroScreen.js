import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages";
import { getHeroeById } from "../../selectors/getHeroById";

//import batman from '../../assets/dc-batman.jpg'; //esto sirve para la importación de un recurso (img) estatico

//Para poder llamar las imagenes del assets
//el true es para que tambien busque en subdirectorios
//const heroImages = require.context('../../assets',true);

export const HeroScreen = () => {
  ////NAvigate para poder navegar en diferentes páginas
  const navigate = useNavigate();
  //Para extraer la información de la url que se envia en el dashboard utilizamos un hook useParams()
  const { heroeId } = useParams();
  
  //Use Memo para poder memorizar la función y cambie solo cuando se haga una modificación dentro de esta
  //useMemo es una función y dentro de esta realiza un callback que es otra funcion
  //esta función debe de regresar el valor que nosotros queremos memorizar
  // const heroe = useMemo( () => {
  //   return  getHeroeById(heroeId);
  // });

  //como en lo anterior solo es una sola línea se puede definir sin los {}
  //el [heroeId] es la declaración de la dependencia, de que el useMemo se vuelva a disparas si
  //elheroeId cambia
  const heroe = useMemo( () => getHeroeById(heroeId), [heroeId]);
 

  const handleReturn = () => {
    //usando el navigate -1, lo que hace es regresar a una página anterior
     navigate( -1 );
  }

   //si lo que se manda en el link, el heroe no existe, se valida para que no nos salga un undefined
  ///y se redirecciona a otra página usando el <Navigate />
  if(!heroe){
    return <Navigate to='/' />
  }

  const {id,superhero,publisher,alter_ego,first_appearance,characters} = heroe;
 
  //const imagePath = `/assets/${id}.jpg`  //desde public/assets
  
  //console.log(heroe)
    return (
      <div className="row mt-5">
          <div className="col-4"> 
             <img 
             //src={batman}  esto sería para cuano tenemos una importación 
             src={heroImages(`./${id}.jpg`)}
             alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
          </div>
          <div className="col-8 animate__animated animate__fadeIn">
              <h3>{superhero}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Alter ego:</b> {alter_ego} </li>
                <li className="list-group-item"> <b>Pubisher:</b> {publisher} </li>
                <li className="list-group-item"> <b>Firts Appearance:</b> {first_appearance} </li>
              </ul>

              <h5 className="mt-3">Characters</h5>
              <p>{characters}</p>
              <button className="btn btn-outline-info" onClick={handleReturn}>Regresar</button>
          </div>
      </div>
    )
  }
  