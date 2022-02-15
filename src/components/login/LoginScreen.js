import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

  const navigate = useNavigate();

  //Cuando se loguea te redirecciona a /marvel y con el replace lo que se hace es no poder ver de nuevo la
  //vista del login porque la persona ya esta logueada, eso se tendría que ver cuando la persona no haya estado loagueado
  const handleLogin = () => {
    navigate('/marvel', {
      replace: true
    });
  }

    return (
      <div className="container mt-5">
          <h1>Login</h1>
          <hr/>

          <button className="btn btn-primary" onClick={handleLogin}>Login</button>

      </div>
    )
  }
  