import { MemoryRouter, Route, Routes } from "react-router-dom"
import { HeroScreen } from "../../../components/hero/HeroScreen"
import { mount } from 'enzyme';
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('Pruebas en <HeroScreen />', () => { 
    // test('No debe de mostrar el HeroScreen si no hay un héroe en el URL', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={'/hero'}>
    //          <Routes>
    //             <Route path="/hero" element={<HeroScreen />} />
    //             <Route path="/" element={<h1>No Hero Page</h1>} />
    //          </Routes>
    //         </MemoryRouter>
    //     );

    //     expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
    //  });


    //  test('Debe de mostrar un herp si el parametro existe y se encuentra', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={'/hero/marvel-spider'}>
    //          <Routes>
    //             <Route path="/hero:heroeId" element={<HeroScreen />} />
    //             <Route path="/" element={<h1>No Hero Page</h1>} />
    //          </Routes>
    //         </MemoryRouter>
    //     );

    //     expect(wrapper.find('.row').exists()).toBe(true);
    //  });

    // test('debe de regresar a la pantalla anterior', () => { 
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/hero/marvel-spider']}>
    //             <Routes>
    //               <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
    //             </Routes>
    //         </MemoryRouter>
    //     );

    //     wrapper.find('button').prop('onClick')();
        
    //     expect(mockNavigate).toHaveBeenCalledWith(-1)

    //  });

    //  test('Debe de mostrar el no hero page, si no se tiene un  heroe', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={'/hero/marvel-spider12354'}>
    //          <Routes>
    //             <Route path="/hero:heroeId" element={<HeroScreen />} />
    //             <Route path="/" element={<h1>No Hero Page</h1>} />
    //          </Routes>
    //         </MemoryRouter>
    //     );

    //     expect(wrapper.text()).toBe('No Hero Page');
    //  });

 })