import React from 'react';

interface IProps {
    name: string;
    binGedrueckt: () => void;
    aendereName: () => void;
}

//Aufgabe: Erstelle noch einen Button und änder den namen auf Christoph
//Funktion aenderName() den Namen auf Christoph
// function KomponentemitProps2(props : {name: string}) {
// function KomponentemitProps2(props : IProps) {
function KomponentemitProps2({ name, binGedrueckt, aendereName } : IProps) {
    return (
        <div>
            <p>mein Name ist {name}</p>
            <button onClick={() => binGedrueckt()}>Click</button>
            <button onClick={() => aendereName()}>Ändere Name</button>
        </div>
    );
}

export default KomponentemitProps2;