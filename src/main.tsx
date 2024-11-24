import { StrictMode } from 'react' /* Importa a biblioteca do react */
import { createRoot } from 'react-dom/client' /* Importa a conectividade da biblioteca react com o html */
import App from './App.tsx' /* Importa os processos (códigos) do arquivo App.tsx para esse arquivo para que este seja conectado ao html*/
import './index.css' /* Importa estilo css do arquivo index.css */

/* Cria uma conexão com o documento html a partir de root com esse arquivo para fazer o processo de renderização do App que está codificada no arquivo App.tsx */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)