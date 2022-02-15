//AppRouter es el router principal


import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";



import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
      //Creación de rutas, estos ejemplos se pueden ver en la pagina de rutas
    <BrowserRouter>
       {/* Definición de 2 tipos de rutas, la primera es para solo mostrar el loginScreen con diferentes
       estilos a los que tiene el dashboardRoutes */}
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            {/* Con el /* se le dice que se quieren todas las rutas despues del / si no es login todas las rutas
            deben ser manejadas por aquí por ejemplo /dashboard/*  */}
            <Route path="/*" element={<DashboardRoutes />}/>

        </Routes>
    </BrowserRouter>
  )
}
