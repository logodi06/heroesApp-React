 //este permitiria compartir nuestro estado y el dispath del reducer a lo largo de toda la app
//la idea del authContext es permitir crear un contexto para proveer información a todos los componente hijos 

import { createContext } from "react";

//este createContext lo que hace es crearse un nuevo contexto
//AuthContext es con mayusculas porque es un componente
export const AuthContext = createContext();
