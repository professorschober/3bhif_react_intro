import React from 'react';
import type {IData} from "../models/Interfaces.ts";
import "../App.css"

const PersonenListe =
    ({data}: { data: IData[] }) => {
    console.log(data);
    return (
        <div>
            <h2>Personen Liste</h2>
            <table border={1}>
                <thead>
                <tr>
                    <th>firstname</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
                </thead>
                <tbody>
            {data.map((person: IData) => (
                // <li key={person.id} className={"mystyle"}>
                //     {person.firstname}
                //     {person.name}, {person.age} Jahre
                // </li>
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

export default PersonenListe;