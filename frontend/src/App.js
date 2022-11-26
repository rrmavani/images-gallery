import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(`https://api.unsplash.com/photos/random/?query=cat&&client_id=LlmSiV3hAX4xOVuxx7Wb3hCxVofgJy1ul0pYB6ynJPs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    
    setWord('');
  }
  
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
