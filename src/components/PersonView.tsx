import React, {useState} from 'react';
import type {IData} from "../models/Interfaces.ts";

interface IPersonProps {
    p: IData;
    onSave : (p:IData, id:number) => void
}

function PersonView({p, onSave}:IPersonProps) {

    const [name, setName] = useState(p.name);


    return (
        <div><h2>klicke den Bleistift um eine Person zu ändern</h2>
            <input value={p.id}/>
            <input
                onChange={(e) => setName(e.target.value)}
                placeholder={p.name} value={name}/>
            <button onClick={()=> {
                console.log(name);
                const newp = {...p,name:name};
                onSave(newp, p.id);
            }}>press</button>
        </div>
    );
}

export default PersonView;