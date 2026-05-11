import React, {useEffect, useState} from 'react';
import type {IData} from "../models/Interfaces.ts";
import "../App.css"

interface IProps {
    data: IData[];
    editiere : (p:IData) => void
}

const PersonenListe =
    ({data, editiere}: IProps) => {

        return (
            <div>
                <h2>Personen Liste</h2>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>firstname</th>
                        <th>name</th>
                        <th>age</th>
                        <th>edit</th>
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
                            <td onClick={()=> editiere(person)}><span>&#9998;</span></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

export default PersonenListe;