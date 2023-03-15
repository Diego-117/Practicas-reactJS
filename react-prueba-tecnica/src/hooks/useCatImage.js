import { useState, useEffect } from "react"

const CAT_CONSTANT_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //recuperar la imagen cada vez que tenemos una cita nueva

    useEffect(() => {
        if (!fact) return 

        const threeFirstWord = fact.split(' ', 3).join(' ')
                    console.log(threeFirstWord)

                    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
                        .then(res => res.json())
                        .then(response => {
                            const  { url } = response
                            setImageUrl(url)
                        })
    }, [fact])

    return { imageUrl: `${CAT_CONSTANT_URL}${imageUrl}` }
}