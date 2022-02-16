//Un reducer es una simple función

import { types } from "../types/types";

// const state = {
//     name: 'Lorena',
//     logged: true
// }

//así luciria la acción  cuando se manda,para que aquí sea evaluada, como ...action.payload, donde se
//estaría estrayendo los datos como name: action.payload.name
// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'Lorena',
//         email: 'lore@gmail.com'
//     }
// }

//Si se produce un cambio en el state se hará una acción
export const authReducer = (state = {}, action ) => {
    
     switch (action.type) {
         case types.login:
             return {
                 ...action.payload,
                 //lo de arriba sería lo mismo que si pusieramos
                 //name: action.payload.name
                 logged: true
             }
         case types.logout:
             return {
                 logged: false
             }
         default:
             return state;
     }
}