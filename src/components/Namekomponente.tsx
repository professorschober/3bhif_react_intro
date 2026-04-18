// import React from 'react';

import {useState} from "react";

const Namekomponente = () => {
    const [vorname, setVorname] = useState('');
    // destructuring
    // const zahlen = [1,2,3,4,5];
    // const [zahl1, zahl2, ...rest] = zahlen;
    // console.log("Zahlen", zahl1, zahl2, rest);
    let vari = "Franz";
    console.log("Vari", vari);

    // console.log("vorname: ",vorname);
    const myFuncyFunction = (name: string) => {
        vari = "Mathias";
        console.log("Vari", vari);
        console.log("Min in my funcy function", name);
        // setVorname(vari);
    }
    return (
        <>
            <h2>Hier wird ein Textfeld eingelesen</h2>
            <label htmlFor="textfeld">Bitte text eingeben:</label>
            <input type="text" id="textfeld" value={vorname}
                   onChange={(e) => setVorname(e.target.value)} />
            <button onClick={() => myFuncyFunction(vorname)}>GetFunky</button>
            <p>Aktueller Wert von Vorname: {vari}</p>
        </>
    );
};

export default Namekomponente;