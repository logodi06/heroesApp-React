import { HeroList } from "../hero/HeroList"

export const MarvelScreen = () => {
    return (
      <div>
          <h1>MarvelScreen</h1>
          <hr />
          {/* Se manda llamar el componente que contiene la lista de los superheroes, se le manda como props el nombre delpublisher */}
          <HeroList publisher={'Marvel Comics'} />
      </div>
    )
  }
  