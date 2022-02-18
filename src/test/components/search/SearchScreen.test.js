import { SearchScreen } from '../../../components/search/SearchScreen'
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";


//lo del mock se utiliza para simular el navigate utilizado en la función handleSearch en el searcScreen
//esto del mock sirve para evular cualquier hook de cualquier libreeria que se importe
//se de respetar el nombre tal cual mockNavigate
const mockNavigate = jest.fn();
 
//Mock simulación ficticia de algo que se quiere evaluar pero que se requeire ser llamado de algo que esta controlando en la prueba
jest.mock('react-router-dom', () => ({
    //si aplicamos el mock a todo el react-router-dom, las demas funciones  dejarían de funcionar por el mount ... etc
    //para evitar ese problema colocamos la siguiente linea es como si no se hiciera ningun cambio 
    // porque es como si no hiciera nada y volvemos a tomar todo el pquete  
    ...jest.requireActual('react-router-dom'),
    //con lo hecho en la línea de arriba nos permite sobreScribir el  useNavigate  
    //cuando se mana llamar el useNavigate regresa una función que es la que se ejecuta 
    useNavigate: () => mockNavigate
}))


//errores que pueden surgir
 //El error de useNavigate may be used only in the context of <router> component, significa que tenemos que usar el memoryRouter

 describe('Pruebas en SearchScreen', () => { 
     test('Debe de mostrarse correctamente con valores por defecto ', () => { 
         const wrapper = mount(
             //el initialEntries es la ruta 
                 <MemoryRouter initialEntries={['/search']}>
                    <SearchScreen />
                 </MemoryRouter>
             
         );
           
         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un héroe')

      });

      test('Debe de mostrar a Batman y el input con el valor del queryString', () => { 
          const wrapper = mount(
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <SearchScreen />
                </MemoryRouter>
          );

          expect(wrapper).toMatchSnapshot(),
            //con el prop buscamos las properties del input, como type, placeholder, classname, name, value
          expect(wrapper.find('input').prop('value')).toBe('batman');

       });

       test('Debe de mostar un error si no se encuentra el hero', () => { 
           const wrapper = mount(
               <MemoryRouter initialEntries={['/search/?q=batman123s']}>
                   <SearchScreen />
               </MemoryRouter>
           );

           expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados: batman123s');
           expect(wrapper.find('.alert-danger').exists()).toBe(true);
        });

        test('Debe de llamar el navigate a la nueva pantalla que es el url', () => { 
            const wrapper = mount(
                <MemoryRouter initialEntries={['/search']}>
                    <SearchScreen />
                </MemoryRouter>
            );
                //los parametros del simulate -> el 1° es el evento que se quiere mandar (change),
                //el segundo es los argumentos que se le estan  mandando a ese  argumento
            wrapper.find('input').simulate('change', {
                //al target le mandamos los argumentos que le pondríamos al input
                //el name que se manda tiene que ser igual al nombre que se le esta mandando al input del searcScreen
                //y esto porque el customHook esta esperando ese nombre para asignarlo y tomar el valor de ahí
                target: {
                    name: 'searchText',
                    value: 'batman'
                }
            });

            //simulación de enviar el evento pero ahora con las props y no con el simulate
            //la acción que se debe realizar con el submit apunta a una función por lo tanto se pone ({})
            //como la función llamada tiene un evento y el evento es un objeto el cual tiene el cual
            //tiene el metodo preventDefault: () => {}
            wrapper.find('form').prop('onSubmit') ({
                 //preventDefault: () => {}
                 preventDefault(){}
            }) ;

            //aquí se evaluar el mockNavigate que es el navigate que se tiene dentro de la función que se manda en el submit
            expect(mockNavigate).toHaveBeenCalledWith('?q=batman');

         });
  })