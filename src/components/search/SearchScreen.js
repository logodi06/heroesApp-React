import { useNavigate, useLocation} from 'react-router-dom';
import   queryString   from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from 'react';

export const SearchScreen = () => {

  //Para la versión 6 de React se  utiliza lo siguiente
  //Para poder obtener la ruta y poder colocar los parametros a buscar como http://localhost:3000/search?q=batman&casa=dc
  const navigate = useNavigate();
  const location = useLocation();

  //Con el queryString lo hace un string y con el parse, lo que hace es separar cada parametro
  //en un arreglo con las palabras
  //const query = queryString.parse(location.search);
  const { q = ''} = queryString.parse(location.search);
  


  const initialForm  = {
    searchText: q
  }
  //desestructuramos el arreglo que regresa  el useForm
  //el  formVaues son los values que regresa el useForm
  //el handleInputChange es la función que regresa
   const [values, handleInputChange, reset ] =useForm(initialForm);

   //Desestructuramos el searchText del  values
  const {searchText} = values;

  //useMemo para que no se llame getHeroes por cada letra si no hasta que cambie el query
  const heroesFiltered = useMemo( () => getHeroesByName( q ), [q])


  const handleSearch = (e) => {
    console.log(searchText);
    e.preventDefault();
    //console.log(searchText);
    //con el navigate obtenemos la ruta en la que nos encontramos
    navigate(`?q=${searchText}`)
  }

    return (
      <>
          <h1>Búsquedas</h1>
          <hr />

            <div className="row">
              <div className="col-5">
                <h4>Buscar</h4>
                <hr />

                {/*  <form onSubmit={(e) => handleSearch(e)}>  */}
                {/* En este caso, si el primer argumento es el que quiero mandar como argumento a una función que se esta llamando
                no hace falta poner todo lo del (e) */}
                <form onSubmit={handleSearch}>
                  <input 
                    type="text" 
                    placeholder="Buscar héroe...." 
                    name="searchText"
                    autoComplete="off"
                    className="form-control"
                    value={ searchText }
                    onChange= {handleInputChange} />

                  <button className="btn btn-outline-primary mt-1" type="submit">Buscar </button>
                </form>
              </div>
              <div className="col-7">
                  <h4>Resultados:</h4>
                  <hr />

                  {
                      (q === '') 
                        ? <div className='alert alert-info '>Buscar un héroe </div>
                        : (heroesFiltered.length === 0) 
                          && <div className="alert alert-danger">No hay resultados: {q}</div> 
                  }


                  {
                    // Como se hace un return implicito, osea que es lo único que se requiere solo se usa
                    //los parentesis () y no es necesario {}
                    heroesFiltered.map( hero => (
                        <HeroCard 
                          key={hero.id}
                          //Como el componente de HeroCard espera los params de id, superhero,publisher, alter_ego, first_appearance, characters
                          //desestructuramos todos los valores del heroe con {...heroe} para mandarselos a ese
                          //componente
                          {...hero}/>
                    ))
                  }

              </div>
            </div>
      </>
    )
  }
  