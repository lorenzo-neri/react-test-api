import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App




/* 
    const [cards, setCards] = useState([])
    const [variableCards, setVariableCards] = useState('')

    const filteredCards = event => {
        setVariableCards(event.target.value);
    };

    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then(response => {
                setCards(response.data.data)
            }).catch(error => {
                console.log(error);
            })
    }, []);

    // Filtra le carte in base al valore di variableCards
    const filtered = cards.filter(card => card.archetype && card.archetype.toLowerCase().startsWith(variableCards.toLowerCase()));

    let content;

    if (filtered.length > 0) {
        content = (
            <div className="container">
                <input className='my-3' onChange={filteredCards} placeholder='Cerca la tua carta' type="text" name="searchedCard" id="searchedCard" />
                <div className="row">
                    {filtered.map((card) => (
                        <div className="col-4 mb-4" key={card.id}>
                            <div className='card h-100 d-flex flex-column'>
                                <h1 className='text-center'>{card.archetype}</h1>
                                {card.card_images.map((cardImage) => (
                                    <img key={cardImage.id} src={cardImage.image_url_cropped} className="card-img-top" alt="" />
                                ))}
                                <div className="card-body flex-grow-1">
                                    <h5 className="card-title">{card.name}</h5>
                                    <p className="card-text">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        content = (
            <div className="container">
                <input className='my-3' onChange={filteredCards} placeholder='Cerca la tua carta' type="text" name="searchedCard" id="searchedCard" />
                <p>La tua ricerca non ha portato nessun risultato.</p>
            </div>
        );
    }




    {content}
*/