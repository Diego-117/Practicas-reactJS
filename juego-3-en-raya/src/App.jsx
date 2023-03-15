import { useState } from 'react';
import './App.css';

import { Square } from './components/square.jsx';
import { TURNS } from './constants.js';
import { checkWinnerForm, chechEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() {
  //FIXME: estado:  espacios en el tablero
  const [board, setBoard] = useState(()=>{
    //recuperamos la aprtida guardada si lo hay del local storage
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage? JSON.parse(boardFromStorage) : Array(9).fill(null) ;
  });

  //FIXME: estado: turnos
  const [turn, setTurn]  = useState(()=>{
    const turnFromStorage  = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X ; // si es null o undefined uso x
  });

  //FIXME: decir el ganador  null es que no hay ganador, false es que hay enpate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn');
  }

  //FIXME: acutalizar turno
  const updateBoard = (index) => {
      //console.log(index)
    //ver si no esta ucupado esa celda
    if (board[index] || winner) return;
    //actualizar tablero
    const newBoard = [...board]; //copia del board
    newBoard[index] = turn; //insertamos nuevo turno
    setBoard(newBoard); //actualizar el turno
    //cambiar turno
    const newTurn =  turn === TURNS.X ? TURNS.O : TURNS.X ;
    setTurn(newTurn);

    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    //revisar si hay ganador 
    const newWinner = checkWinnerForm(newBoard);
    if (newWinner) {
      setWinner(newWinner); 
    }else if(chechEndGame(newBoard)){
      setWinner(false);
    }
  }
  return ( //me quede en el minuto 1 hoara con 7 mn
      <main className='board'>
        <h1>Juego del Gato</h1>
        <button onClick={resetGame}>Empezar de nuevo</button> 
        <section className='game'>
          {
            board.map((square, index) => {
              return(
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner}/>
      </main>
  )
}

export default App
