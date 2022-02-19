import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate

}));

describe('Pruebas en Navbar', () => { 

    const authContext = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro',
            logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={authContext}>
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test('Debe de mostrar correctamente el <Navbar>', () => { 
       
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');

     });

     test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => { 
        // se hace  la simulación del click del boton y esto ejecuta una función por eso los () al final
        wrapper.find('button').prop('onClick')();
        //una vez ejecutado  el boton con la función 
        //Para  el  navigate se debe evaluar que haya sido llamado,  al igual que el dispatch
        expect(authContext.dispatch).toHaveBeenCalledWith({'type':types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});


      });
 })