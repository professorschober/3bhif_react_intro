import React from 'react';

interface IPerson {
    id: number;
    name: string;
    firstname: string;
    age: number;
}

interface IPersonListProps {
    persons: IPerson[];
}

const PersonenListeUndTabelle = ({ persons }: IPersonListProps) => {
    return (
        <div>
            <h2>Personen als Liste</h2>

            <ul>
                {persons.map((person) => (
                    <li key={person.id}>
                        {person.firstname} {person.name}, {person.age} Jahre
                    </li>
                ))}
            </ul>

            <h2>Personen als Tabelle</h2>

            <table border={1}>
                <thead>
                <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Alter</th>
                </tr>
                </thead>

                <tbody>
                {persons.map((person) => (
                    <tr key={person.id}>
                        <td>{person.firstname}</td>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonenListeUndTabelle;