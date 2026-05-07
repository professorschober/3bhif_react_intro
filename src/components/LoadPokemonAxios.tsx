import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IPokemon {
    name: string;
    url: string;
}

interface IPokemonApiResponse {
    results: IPokemon[];
}

const LoadPokemonAxios = () => {
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

    const getPokemonImageUrl = (url: string): string => {
        const parts = url.split('/');
        const id = parts[parts.length - 2];

        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    };

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                setIsLoading(true);

                const response = await axios.get<IPokemonApiResponse>(apiUrl);

                setPokemonList(response.data.results);
            } catch (error) {
                setErrorMessage('Die Pokémon konnten nicht geladen werden.');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadPokemon();
    }, []);

    return (
        <div style={styles.container}>
            <h1>Pokemon mit Axios laden</h1>

            <p>
                Die Daten werden mit <code>useEffect</code> einmal beim Laden
                der Komponente von der PokeAPI geladen.
            </p>

            {isLoading && <p>Pokémon werden geladen...</p>}

            {errorMessage !== '' && (
                <p style={styles.errorText}>{errorMessage}</p>
            )}

            {!isLoading && errorMessage === '' && (
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <th style={styles.tableHeader}>Name</th>
                        <th style={styles.tableHeader}>URL</th>
                        <th style={styles.tableHeader}>Bild</th>
                    </tr>
                    </thead>

                    <tbody>
                    {pokemonList.map((pokemon) => (
                        <tr key={pokemon.name}>
                            <td style={styles.tableCell}>
                                {pokemon.name}
                            </td>
                            <td style={styles.tableCell}>
                                {pokemon.url}
                            </td>
                            <td style={styles.tableCell}>
                                <img
                                    src={getPokemonImageUrl(pokemon.url)}
                                    alt={pokemon.name}
                                    style={styles.image}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse' as const,
        marginTop: '20px'
    },
    tableHeader: {
        border: '1px solid #cccccc',
        padding: '10px',
        backgroundColor: '#eeeeee',
        textAlign: 'left' as const
    },
    tableCell: {
        border: '1px solid #cccccc',
        padding: '10px'
    },
    image: {
        width: '60px',
        height: '60px'
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold'
    }
};

export default LoadPokemonAxios;