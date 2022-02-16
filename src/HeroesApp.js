import { useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter"

const init = () => {
    return {
      logged: true,
      name: 'Lorena temporal'
    }
}


export const HeroesApp = () => {

  //se puede colocar una función que vuelva a renderizar los componentes p.e. el useReducer
  //el use reducer contiene dos funciones,  el state(user) y el dispatch
  //el  dispatch es la función que se utiliza para disparar acciones al reducer
  //el user es la función que contiene todos los datos, name,email etc.
  //authReducer no se ejecuta solo se manda la referencia.  {} estado inicial---vacio
  //init forma para inicializar el reducer
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return ( 
    //El AuthContext es un hideComponente, el AuthContext se necesita que provee información a todos
    //sus hijos
    <AuthContext.Provider value={{
       user,
       dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>

  )
}
