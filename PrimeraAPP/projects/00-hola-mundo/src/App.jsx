import './App.css'
import {AppTwitterCardFollow} from './TwitterCardFollow.jsx'
export function App(){
     // tambien podemos pasar props como funciones 
    const formatUser = (datos) => `@${datos}`

    const users = [
        {
            format: formatUser,
            initialIsFollowin: true,
            imgNom: 'https://i.pinimg.com/236x/52/2e/9b/522e9bc4d8b8d7e41bb84d46325d1026.jpg',
            datos: 'quetzalcoatl'
        },
        {
            format: formatUser,
            initialIsFollowin: false,
            imgNom: 'https://i.pinimg.com/564x/a0/5e/78/a05e787596e6c1a8b83006e5c437614b.jpg',
            datos: 'UranoDiosa'
        },
        {
            format: formatUser,
            initialIsFollowin: true ,
            imgNom: 'https://i.pinimg.com/564x/a0/5e/78/a05e787596e6c1a8b83006e5c437614b.jpg',
            datos: 'UranoDiosa'
        }
    ]
    return (
        //pasar boleanos
        <div className='App'>
            { //las llaves son para evaluar lo que queremos renderisar
                users.map(({format, initialIsFollowin, imgNom, datos}, index)=>(
                        <AppTwitterCardFollow 
                            key={index} //siempre usar la key, que no sea el del index sino una proporcionada por la bd
                            format={format} 
                            initialIsFollowing={initialIsFollowin}
                            //nom="Quetzalcóatl" 
                            imgNom={imgNom} 
                            datos={datos}
                        >
                            {datos}
                        </AppTwitterCardFollow>
                    )
                )
            }
        </div>
    )
}