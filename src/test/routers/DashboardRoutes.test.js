import { mount } from 'enzyme';

//Permite hacer evaluacion y pruebas como si se estuviera en el navegador web 
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';



describe('Pruebas en <DashboardRoutes />', () => { 
    const authContext = {
        user: {
            logged: true,
            name: 'Loren'
        }
    }
    
    test('Debe de mostrarse correctamente - Marvel', () => { 
        const wrapper = mount (
            <AuthContext.Provider value={authContext}>
            {/* Permite hacer evaluacion y pruebas como si se estuviera en el navegador web  
            esto sirve para proveer el conteexto suficiente del useNavigate  */}
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        //busca el nombre del usuario y  verifica que sea el declarado en el authContext
        expect(wrapper.find('.text-info').text().trim()).toBe('Loren'); 
        expect(wrapper.find('h1').text().trim()).toBe('MarvelScreen'); 


     });

     test('Debe de mostrarse correctamente - DC', () => { 
         const wrapper = mount (
            <AuthContext.Provider value={authContext}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
         );

          //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DCScreen');
         
      });


 })