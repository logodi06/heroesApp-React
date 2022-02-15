import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {

  const initialForm  = {
    searchText: ''
  }
  //desestructuramos el arreglo que regresa  el useForm
  //el  formVaues son los values que regresa el useForm
  //el handleInputChange es la función que regresa
   const [values, handleInputChange, reset ] =useForm(initialForm);

   //Desestructuramos el searchText del  values
  const {searchText} = values;


  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
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
            </div>
      </>
    )
  }
  