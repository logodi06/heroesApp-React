import { AppRouter } from '../../routers/AppRouter';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';


describe('Pruebas en <AppRouter /> ', () => { 

    

    test('Debe de mostrar el loginSreen si el usuario no esta autenticado', () => {
        
        const contextValue = {
            user: {
                logged: false
            }
        }

        //Creamos el authContext, con los valores iniciales que tiene en el HeroesApp.js
       
        //con el shallow solo se rendiriza el primer componente de Approuter, lo cual sería  solo 
        //renderizar el BrowserRouter 
        //con el mount se renderizan todos los componentes que esten dentro de Approuter 
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                {/* Como el usuario no esta logueado, debe de mostrar el login */}
                <AppRouter />
            </AuthContext.Provider>
        );

        //console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');

     });

     test('Debe de mostrar el componente de Marvel si el usuario esta autenticado', () => { 
         const contextValue = {
             user: {
                 logged: true,
                 name: 'Lor'
             }
         };

         const wrapper = mount(
             <AuthContext.Provider value={contextValue}>
                 <AppRouter />
             </AuthContext.Provider>
         );

         expect(wrapper).toMatchSnapshot();  
         expect(wrapper.exists()).toBe(true); //or expect(wrapper.exists()).toBeTruthy();

         expect(wrapper.find('h1').text().trim()).toBe('MarvelScreen');
      })
 })