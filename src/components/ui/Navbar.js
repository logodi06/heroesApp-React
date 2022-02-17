import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {
    //el authContext es el nombre de donde se obtiene la declaración de ese context
    //user es lo que se extrae del value donde esta el AuthContext.provider, esta en la parte de arriba de la raiz
    const {user, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        // const action = {
        //     type: types.logout
        // }

        // dispatch(action);

        dispatch( { type: types.logout });

        // TODO: por hacer
        navigate('/login', {
            replace: true
        });
        console.log('logout');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        //Verificar si esta activa lo que se ha seleccionado
                        //El video muestra que así debe ser la forma de activar el link seleccionado pero 
                        //eso cambia los estilos y todo, sin aplicar eso y dejando el código como se tiene
                        // a continuación tambien funciona 
                        // className={ ({isActive}) =>  'nav-item nav-link' + (isActive ? 'active': '')} 
                        className="nav-item nav-link"
                      
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        //className={ ({isActive}) =>  'nav-item nav-link' + (isActive ? 'active': '')}  
                        className="nav-item nav-link" 
                        
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        //className={ ({isActive}) =>  'nav-item nav-link' + (isActive ? 'active': '')}  
                        className="nav-item nav-link" 
                        
                        to="/search"
                    >
                        search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        { user.name } 
                    </span>
                    {/* El navlink se cambia por un  boton porque cuando se de click se requiere
                    que la sesión se termine, ya sea borrando lo que esta en el localStorage  */}
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}