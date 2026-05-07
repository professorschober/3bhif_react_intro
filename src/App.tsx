import {useState, useEffect, use} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First from "./components/First.tsx";
import Second from "./components/Second.tsx";
import Bildkomponente from "./components/Bildkomponente.tsx";
import PropsKomponente from "./components/PropsKomponente.tsx";
import KomponentemitProps2 from "./components/KomponentemitProps2.tsx";
import type {IData} from "./models/Interfaces.ts";
import {mockData} from "./models/mockData.ts";
import PersonenListe from "./components/PersonenListe.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [ageKW, setAgeKW] = useState<number>(48);
  const [changename, setchangename] =
      useState<string>("Professor MS Typescript Style");
  const [persons, setPersons] = useState<IData[]>(
      []
  );
  // console.log(persons);

  const holedatenVonApi = async () => {
      console.log("holedatenVonApi");
      const response =
          await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setPersons(data);
      console.log(data);
  }

  useEffect(() => {
      console.log("useEffect");
      holedatenVonApi();
  },[]);

  const constname = "Professor MS Typescript Style";
  const riseAge = () => {
      console.log("Age is rised");
      // setAgeKW(ageKW + 1);
  }

  const binGedrueckt = () =>
    {
        console.log('Bin Gedrückt');
        // setCount((count) => count + 1);
    }

    const aendereName = () => {
      console.log("Name is changed");
      setchangename("Professor Christoph (KW)");
    }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started 3BHIF</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
        <section className="center2">
             <PersonenListe data={persons} />
        </section>
        <section className="center2">
            {/*<PropsKomponente name={changename} />*/}
            {/*<PropsMitInterfaceKomponente*/}
            {/*    name="MS" firstname="Mathias" age={ageKW} />*/}
            {/*<PropsMitInterfaceKomponenteMitAge*/}
            {/*    name="KW" firstname="Christoph" age={48} riseAge={riseAge} />*/}
            {/*<KomponentemitProps2*/}
            {/*    binGedrueckt={binGedrueckt} aendereName={aendereName} name="Mathias" />*/}

            {/*<Namekomponente />*/}
            {/*<LoadPokemon></LoadPokemon>*/}
            {/*<LoadPokemonAxios />*/}
        </section>
    </>
  )
}

export default App
