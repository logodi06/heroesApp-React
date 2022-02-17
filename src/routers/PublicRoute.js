import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    //operador ternario.- Si el usuario esta logueado que se redireccione a marvel, y que no pueda visualizar 
    //el login, pero si no esta logueado que redireccione al hijo el cual es el componente Login
  return user.logged
    ? <Navigate to="/marvel" />
    : children
}
