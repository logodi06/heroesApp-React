import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Pruebas en <authRecuder />', () => { 

    test('Debe de retornar el estado por defecto', () => { 
        // tenemos que tener un estado inicial, asumir que eso será lo que tiene que regresar y evluarlo
        const state = authReducer({ logged: false } , {});
        //console.log(state)
        expect( state ) .toEqual({logged:false});

     });

     test('Debe de autenticar y colocar el "name" del usuario', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Lorena'
            }
        }
         const state = authReducer({logged:false}, action );
        //console.log(state);
         expect(state).toEqual({logged: true,  name: 'Lorena'});
      });

      test('Debe de borrar el name del usuario y logged en false', () => { 
          const initialState = {
              type: types.login,
              name: 'Lorena'
          };

          const accion = {
              type: types.logout
          };

          const state = authReducer(initialState,accion);
          //console.log(state)

          expect(state).toEqual({logged: false});

          
       });
 })