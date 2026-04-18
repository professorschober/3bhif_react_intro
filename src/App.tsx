import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First from "./components/First.tsx";
import Second from "./components/Second.tsx";
import Bildkomponente from "./components/Bildkomponente.tsx";
import PropsKomponente from "./components/PropsKomponente.tsx";
import PropsMitInterfaceKomponente from "./components/PropsMitInterfaceKomponente.tsx";
import Namekomponente from "./components/Namekomponente.tsx";
import PropsMitInterfaceKomponenteMitAge from "./components/PropsMitInterfaceKomponenteMitAge.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [ageKW, setAgeKW] = useState<number>(48);
  const constname = "Professor MS Typescript Style";
  const riseAge = () => {
      console.log("Age is rised");
      setAgeKW(ageKW + 1);
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
        {/*<section className="center2">*/}
        {/*    <First />*/}
        {/*    <Bildkomponente />*/}
        {/*    <Second />*/}
        {/*</section>*/}
        <section className="center2">
            {/*<PropsKomponente name={constname} />*/}
            <PropsMitInterfaceKomponente
                name="MS" firstname="Mathias" age={ageKW} />
            <PropsMitInterfaceKomponenteMitAge
                name="KW" firstname="Christoph" age={48} riseAge={riseAge} />
            {/*<Namekomponente />*/}
        </section>
    </>
  )
}

export default App
