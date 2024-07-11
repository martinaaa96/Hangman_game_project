import { useState } from 'react'
import words from './words.json';
import {HangmanWord}from './HangmanWord';
import {Keyboard}from './Keyboard';
import {HangmanDrawing}from './HangmanDrawing';

function App() {
 const [wordToGuess, setWordToGuess] = useState(() =>{
  return words[Math.floor(Math.random() * words.length)]
 });

 const[guesedLetters, setGuestedLetters] = useState<string[]>([])

 const incorrectLetters = guesedLetters.filter(letter => !wordToGuess.includes(letter))

  return (
    <>
      <div
      style = {{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",

      }}> 

      
      <div style={{ fontSize: "2rem" , textAlign: "center", }}>
        Lose 
        Win
    </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.lenght}/>
      <HangmanWord/>
      <div style ={{ alignSelf: "stretch"}}>
      <Keyboard/>
    
      </div>
      </div>
    </>
  )
}

export default App
