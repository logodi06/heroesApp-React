import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";



describe('Pruebas en Navbar', () => { 

    

    test('Debe de mostrar correctamente el <Navbar>', () => { 

        const user = {
            name: 'Pedro'
        }

        
        const wrapper = mount(
            <AuthContext.Provider value={user}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');

     });
 })