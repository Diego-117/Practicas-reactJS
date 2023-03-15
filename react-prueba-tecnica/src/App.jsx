import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`

export function App () {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick  = async () => {
        refreshFact()
    }

  return (
    <main>
        <h1>App de gatos ramdon</h1>
        <button onClick={handleClick}>Obten un nuevo texto fact</button>
        <p>{fact}</p>
        {imageUrl && <img src={imageUrl} alt={`Imagen extraida de ${fact}`} />}
    </main>
  )
}