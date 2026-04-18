import React from 'react';

interface IPersonProps {
    name : string;
    firstname: string;
    age: number;
    riseAge: () => void;
}

// function PropsMitInterfaceKomponente(props: IPersonProps) {
function PropsMitInterfaceKomponenteMitAge(
    { name, firstname, age, riseAge }: IPersonProps) {

    return (
        <div>
            <h2>{name}</h2>
            <h2>{firstname}</h2>
            <h2>{age}</h2>
            <button onClick={() => riseAge()}>Ändere Alter von MitAge</button>
        </div>
    );
}

export default PropsMitInterfaceKomponenteMitAge;