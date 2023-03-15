import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

//recupera el contenedor donde ira el sistema 
const root = createRoot(document.getElementById('app')) 
//lo renderisa
root.render(
  <App />
)
