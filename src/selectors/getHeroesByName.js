import { heroes } from "../data/heroes";



export const getHeroesByName = ( name= '' ) => {
    //console.log('se llama');
    if(name === ''){
        return [];
    }
    name = name.toLowerCase();

    return heroes.filter( hereo => hereo.superhero.toLowerCase().includes(name));

    //return heroes;

}
