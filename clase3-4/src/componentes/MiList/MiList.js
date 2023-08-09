import React from 'react'

function MiList(props) {
    return(
        <ul>
            {props.nombres.map((nombre,idx)=><li key={nombre+idx}>{nombre}</li>)}
        </ul>
    )
}
export default MiList