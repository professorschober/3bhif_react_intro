// import React from 'react';

// Ziel: wir wollen der Komponente einen Parameter übergeben
function PropsKomponente({ name } : { name: string }) {

    return (
        <div>
            <h2>Angezeigter Parameter: {name}</h2>
        </div>
    );
}

export default PropsKomponente;