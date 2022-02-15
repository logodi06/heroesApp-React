//Se crean 2 archivos de rutas para poder separar los estilos que se deben tener si una  persona esta
//dentro navegando o se encuentra en el login

//La estrategia del dashboardRoutes es poder aplicar diferentes estilos de páginas
//segun sea lo que se requiera, por ejemplo el login
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/hero/HeroScreen";


export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
              
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="hero/:heroeId" element={<HeroScreen />} />

              <Route path="search" element={<SearchScreen />} />
              <Route path="/" element={<MarvelScreen />} />

          </Routes>
        </div>
    </>
  )
}
