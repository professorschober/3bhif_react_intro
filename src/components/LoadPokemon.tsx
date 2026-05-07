import React, { useEffect, useState } from 'react';

interface IPokemon {
    name: string;
    url: string;
}

interface IPokemonApiResponse {
    results: IPokemon[];
}

const LoadPokemon = () => {
    const [pokemonWithoutUseEffect, setPokemonWithoutUseEffect] = useState<IPokemon[]>([]);
    const [pokemonWithUseEffect, setPokemonWithUseEffect] = useState<IPokemon[]>([]);
    const [rendern, setRendern] = useState<number>(0);

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

    const getPokemonImageUrl = (url: string): string => {
        const parts = url.split('/');
        const id = parts[parts.length - 2];

        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    };

    /*
        Variante 1:
        Diese Funktion wird direkt im Komponentenrumpf aufgerufen.
        Dadurch wird sie bei jedem Rendern erneut ausgeführt.
    */
    const loadPokemonWithoutUseEffect = async () => {
        const response = await fetch(apiUrl);
        const data: IPokemonApiResponse = await response.json();

        console.log('Pokemon ohne useEffect geladen');

        if (pokemonWithoutUseEffect.length === 0) {
            setPokemonWithoutUseEffect(data.results);
        }
    };

    loadPokemonWithoutUseEffect();

    /*
        Variante 2:
        Diese Funktion wird innerhalb von useEffect aufgerufen.
        Durch [] wird sie nur einmal beim ersten Rendern ausgeführt.
    */
    useEffect(() => {
        const loadPokemonWithUseEffect = async () => {
            const response = await fetch(apiUrl);
            const data: IPokemonApiResponse = await response.json();

            console.log('Pokemon mit useEffect geladen');

            setPokemonWithUseEffect(data.results);
        };

        loadPokemonWithUseEffect();
    }, []);

    return (
        <div>
            <h1>Pokemon laden: ohne useEffect vs. mit useEffect</h1>

            <button onClick={() => setRendern(rendern + 1)}>
                Neu rendern
            </button>

            <p>Render-Zähler: {rendern}</p>

            <h2>1. Pokémon ohne useEffect</h2>

            <p>
                Diese Variante startet die API-Abfrage bei jedem Rendern der Komponente.
                Klicke auf den Button und beobachte die Konsole.
            </p>

            <table border={1}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Bild</th>
                </tr>
                </thead>

                <tbody>
                {pokemonWithoutUseEffect.map((pokemon) => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.url}</td>
                        <td>
                            <img
                                src={getPokemonImageUrl(pokemon.url)}
                                alt={pokemon.name}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>2. Pokémon mit useEffect</h2>

            <p>
                Diese Variante lädt die Daten nur einmal beim Starten der Komponente.
                Weitere Render-Vorgänge laden die Pokemon nicht erneut.
            </p>

            <table border={1}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Bild</th>
                </tr>
                </thead>

                <tbody>
                {pokemonWithUseEffect.map((pokemon) => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.url}</td>
                        <td>
                            <img
                                src={getPokemonImageUrl(pokemon.url)}
                                alt={pokemon.name}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoadPokemon;