import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [items, setItems] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?search=${searchItems}`);
                setItems(response.data.results);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [searchItems]);

    useEffect(() => {
        // Filtra i suggerimenti basati sulla corrispondenza con l'input
        const filteredSuggestions = items
            .filter(item => item.name.toLowerCase().includes(searchItems.toLowerCase()))
            .map(item => ({
                name: item.name,
                highlighted: getHighlightedText(item.name, searchItems),
            }));

        setSuggestions(filteredSuggestions);
    }, [searchItems, items]);

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <strong key={index}>{part}</strong>
                    ) : (
                        part
                    )
                )}
            </span>
        );
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchItems(inputValue);
    };

    return (
        <>
            <input
                className='my-3'
                onChange={handleInputChange}
                placeholder='Cerca il tuo personaggio'
                type="text"
                name="searchedPeople"
                id="searchedPeople"
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <div key={index}>{suggestion.highlighted}</div>
                ))}
            </ul>
            <ul>
                {items.map((item, index) => (
                    <div key={index}>
                        <li>
                            Name: {item.name}
                        </li>
                        <ul>
                            <li>Mass: {item.mass}</li>
                            <li>Height: {item.height}</li>
                        </ul>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default App;