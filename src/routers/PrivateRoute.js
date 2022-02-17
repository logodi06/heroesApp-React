import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'
 
//children es una prop que recibe lo que se manda del appRoute, lo cual es un componente
export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    //useLocation regresa datos de la página en la que se encuentra el usuario
    //incluyendo el pathname 
    //const location = useLocation();
    const {pathname, search} = useLocation();

    localStorage.setItem('lastPath',pathname + search);
   

    //si el usuario esta logueado, hacer la condicion de verdad o falso
    //el user.logged es lo que se tiene de la propiedad del context
    return user.logged 
        ? children
        //si no esta autenticado, lo que hace el navigate es redireccionar al login
        : <Navigate to="/login" />
  
}
