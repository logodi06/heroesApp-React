import { heroes } from "../data/heroes"


export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics','Marvel Comics'];

    //Si el publisher que se manda no esta en arreglo debe mostrar un error
    if(!validPublishers.includes(publisher)){
        throw new Error (`${publisher} no es un publisher valido`);
    }
    //EL filter filta todos los elementos que coincidan con la  condicion
    //puede ser uno o mas
    return heroes.filter( hero => hero.publisher === publisher );
}