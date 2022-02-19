import { mount } from 'enzyme';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <loginScreen />', () => { 

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <LoginScreen />    
            </MemoryRouter>   
        </AuthContext.Provider>
    );

    test('Debe de hacer match con el snapshot', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('Debe de realizar el dispatch y la navegación', () => { 
        //creamos una constante  de una función para simular el evento del click
        const handleClick =  wrapper.find('button').prop('onClick');
        //al llamar la función estamos ejecutandola
        handleClick();

        const action = {
            type: types.login,
            payload: {
                name: 'Lorena GD'
            }
        }

        

         expect(contextValue.dispatch).toHaveBeenCalledWith(action);

         expect(mockNavigate).toBeCalledWith('/marvel',{replace: true});

         localStorage.setItem('lastPath','/dc');

         handleClick();

         expect(mockNavigate).toBeCalledWith('/dc',{replace: true});


      });
 })