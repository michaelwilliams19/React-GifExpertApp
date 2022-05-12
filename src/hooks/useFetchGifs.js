import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//CUSTOM HOOK
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category).then(imgs => {
            
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category])
    //este ultimo parametro es para que se vuelva a ejecutar el useEffect cuando la categoria cambia.
    //el use effect se ejecuta par ala primera vez que se renderiza el componente.

    return state;
}
