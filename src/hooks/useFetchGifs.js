import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /* se ejecuta la funcion dentro del useEffect 
    cuando el componente es renderizado por primera vez*/
    useEffect( () => {
  /* obtengo las imagenes atravez de la url y mapeo los datos necesarios a travez de la funcion */
        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])




    return state; // { data:[], loading: true };


}

