import React from 'react';

interface IPersonProps {
    name : string;
    firstname: string;
    age: number;
}

// function PropsMitInterfaceKomponente(props: IPersonProps) {
function PropsMitInterfaceKomponente(
    { name, firstname, age }: IPersonProps) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{firstname}</h2>
            <h2>{age}</h2>
        </div>
    );
}

export default PropsMitInterfaceKomponente;