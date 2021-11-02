import {useEffect, useState} from 'react';
function CoordenadaPuntero(){
    const [posicion, setPosicion] = useState({x:0, y:0});
    useEffect(()=>{
        window.addEventListener('mousemove', setPosicion)
        return()=>{
            window.removeEventListener('mousemove', setPosicion)
        }
    }, [])

    return(
        <div>
            <p>{posicion.x} - {posicion.y}</p>
        </div>
    )

}

export default CoordenadaPuntero;
