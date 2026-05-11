import React, {useState} from 'react';
import type {IData} from "../models/Interfaces.ts";

interface IPersoninfoProps {
    person : IData,
    personChange: (personState: IData) => void;
}

// id: number;
// name: string;
// firstname: string;
// age: number;

const Personinfo = ({ person, personChange } : IPersoninfoProps) => {
    console.log("Person", person);
    if(!person)
        return null;
    const { id, name, firstname, age} = person;
    const [personState, setPersonState] = useState<IData>(person);
    const changename = (nameparam: string) => {
        setPersonState({ ...person, name: nameparam });
    }
    return (
        <>
            <h2>Person Info</h2>
            <div>
                <label htmlFor="idfeld">Bitte text eingeben:</label>
                <input id="idfeld" type="text" value={personState.id} />
            </div>
            <div>
                <label htmlFor="textfeld">Bitte text eingeben:</label>
                <input id="textfeld" type="text" value={personState.name}
                       onChange={(e) => changename(e.target.value)} />
            </div>
            <div>
                <input id="textfeld" type="button"
                       onClick={() => personChange(personState)} value={"change"} />
            </div>

            {/*<h3>{id}, {name}, {firstname}, {age}</h3>*/}
        </>
    );
};

export default Personinfo;