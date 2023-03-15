import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/Facts.js'

export function useCatFact () {
    const [fact, setFact] = useState('lorem ipsum appi de gatos bonitos')

    //sacamos la implementacion
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    //---------
    useEffect(refreshFact, [])

    return {fact, refreshFact}
}