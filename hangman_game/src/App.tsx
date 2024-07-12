import { useEffect, useState } from 'react'
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

 function addGuessedLetter(letter:string){
 if(guesedLetters.includes(letter)) return

 setGuestedLetters(currentLetters => [... currentLetters, letter]);


 }


 useEffect(()=>{
const handler = (e:KeyboardEvent) =>{
  const key = e.key
  if(!key.match(/^[a-z]$/)) return 

  e.preventDefault();
  addGuessedLetter(key);

}

document.addEventListener('keypress', handler);

return ()=>{
  document.addEventListener('keypress', handler)
}

 },[guesedLetters])
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
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters = {guesedLetters} wordToGuess = {wordToGuess}/>
      <div style ={{ alignSelf: "stretch"}}>
      <Keyboard/>
    
      </div>
      </div>
    </>
  )
}

export default App
