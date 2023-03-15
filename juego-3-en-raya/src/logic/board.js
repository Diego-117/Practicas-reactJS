//FIXME: Recorrer el arreglo para ver si hay ganador 
import { WINNER_COMBOS } from "../constants";


export const checkWinnerForm = (boardToCheck) => {
    //revisamos
    for (const combo of WINNER_COMBOS) {
      // de cada array dentro del array obtenemos su valor de su contenido
      const [a, b, c]  = combo;
      //checamos las combinaciones ganadoras
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    //si no hay ganador
    return null;
  }


  export const chechEndGame = (newBoard) =>{
    //revisamos si hay un enpate 
    //revisamos si hay espacios vacios
    return newBoard.every((Square) => Square !== null);
  }