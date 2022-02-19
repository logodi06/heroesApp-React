import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext);

  const navigate = useNavigate();


  //Cuando se loguea te redirecciona a /marvel y con el replace lo que se hace es no poder ver de nuevo la
  //vista del login porque la persona ya esta logueada, eso se tendría que ver cuando la persona no haya estado loagueado
  const handleLogin = () => {
    //Para loguear a la persona debemos crear una acción y mandarla por el dispatch, el cual se encuentra
    // nuestra raíz de heroesApp pero lo traemos con el authContext, ya que permeite compartir losd atos a los hijos
    const action = {
      type: types.login,
      payload: {
        name: 'Lorena GD'
      }
    }

    dispatch(action);

    //se lee del localStorage la ultima ruta en la que estaba el usuario
    //al loguearse extrae esa ruta y lo rediecciona, pero si no existe información en el localstorage
    //lo redirecciona a marvel
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true
    });
  }

    return (
      <div className="container mt-5">
          <h1>Login</h1>
          <hr/>

          <button className="btn btn-primary" onClick={handleLogin}>Login</button>

      </div>
    )
  }
  