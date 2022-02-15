import { HeroList } from "../hero/HeroList"

export const DcScreen = () => {
  return (
    <div>
        <h1>DCScreen</h1>
        <hr />
          {/* Se manda llamar el componente que contiene la lista de los superheroes, se le manda como props el nombre delpublisher */}
        <HeroList publisher={'DC Comics'} />
    </div>
  )
}
