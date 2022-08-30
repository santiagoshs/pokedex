import React, { useState } from "react";
import ApiUrl from "../services/ApiUrl";

const First = () => {

    const [cambio, setCambio] = useState();
    
    return (
        <>
            <h1>Pokedex</h1>
            <input type={"text"}></input>
            <button> Search pokemon</button>
            
        </>
    )
}

export default First;