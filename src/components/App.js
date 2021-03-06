import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //Variables de estado
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState('katacroker');
  const [lastLetter, setLastLetter] = useState('');
  const [userLetters, setUserLetters] = useState('');


  const handleClickIncrement = (ev) => {
    ev.preventDefault();

    setNumberOfErrors(numberOfErrors + 1);
  };

  
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    const htmlArray = wordLetters.map((eachLetter, index) => (
      <li className="letter" key={index}>
        {userLetters.includes(eachLetter) ? eachLetter : ' '}
      </li>
    ));
    return htmlArray;
  };


  const handleInput = (ev) => {
    const letterToCompare = ev.currentTarget.value;
    const patternSpanish = /^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/;

    if (letterToCompare.match(patternSpanish)) {
      setLastLetter(letterToCompare);
      setUserLetters([...userLetters, letterToCompare]);
    } else alert('Letra no válida');
    //setLastLetter('');
  };

  //funciones que necesitamos 'https://random-words-api.vercel.app/word'

  const handleClick = () => {
    fetch(`https://random-words-api.vercel.app/word`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].word);
        console.log(data[0].word.length);
        const info = data;
        /*
  for (let index = 0 ; index< info.word.length; index ++){
console.log(info.word.length);

  }*/
      });
  };


//------------------------------------------------------------------------------
  return (
    <div className="App">
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>

              <ul className="letters">{renderSolutionLetters()}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>
            <button onClick={handleClick}>Empezar </button>
            <button onClick={handleClickIncrement}>Incrementar</button>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                onChange={handleInput}
                value={lastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
              />
            </form>
          </section>
          <section className={'dummy error-' + numberOfErrors}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
