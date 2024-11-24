import { useState } from "react"
import { ItemSuggestion } from "./componentes/ItemSuggestion"
import { getHistoric, setHistoric } from "./storage/historic"
import { sendMenssage } from "./api/openai"
import { ThreeDots } from "react-loader-spinner"

type ProgressType = 'pending' | 'started' | 'done'

type Message = {
  role: 'user' | 'assistant'
  content: string
  subject?: string
}

// pending -> started -> done

function App() {
  const [progress, setProgress] = useState<ProgressType>('pending')
  const [textarea, setTextarea] = useState<string>('')
  const [chat, setChat] = useState<Message[]>([]) 
  const [Loading, setLoading] = useState<boolean>(false)

  function resetChat() {
    setProgress('pending')
    setChat([])
  }

  async function handleSubmitChat() {
    if (!textarea) {
      return
    }

    const message = textarea
    setTextarea('')

    if (progress === "pending") {
      setHistoric(message)

      setProgress('started')

      const prompt = `gere uma pergunta onde simule uma entrevista de emprego sobre ${message}, após gerar a pergunta, enviearei a resposta e voçê me dará um feedback. O feedback precisa ser simples, objetivo e corresponder fielmente a resposta enviada. Após o feedback não existirá mais interação.`

      const messageGPT: Message = {
        role: 'user',
        content: prompt,
        subject: message
      }

      setChat(text => [...text, messageGPT])
      setLoading(true)
      const questionGPT = await sendMenssage([messageGPT])
      setChat(text => [...text, { role: 'assistant', content: questionGPT.content}])
      setLoading(false)  
      return
    } 
    
    const responseUser: Message = {
      role: 'user',
      content: message
    }

    setChat(text => [...text, responseUser])
    setLoading(true)
    const feedbackGPT = await sendMenssage([...chat, responseUser])
    setLoading(false)
    setChat(text => [...text, { role: 'assistant', content: feedbackGPT.content }])
    setProgress('done')    

  }

  return (
      <div className="container">
        <div className="sidebar">
          <details open className="suggestion">
            <summary>Tópicos Sugeridos</summary>
            <ItemSuggestion title="HTML" onClick={() => setTextarea('HTML')} />
            <ItemSuggestion title="CSS" onClick={() => setTextarea('CSS')} />
            <ItemSuggestion title="JavaScript" onClick={() => setTextarea('JavaScript')} />
            <ItemSuggestion title="TypeScript" onClick={() => setTextarea('TypeScript')} />
          </details>

          <details open className="historic">
            <summary>Histórico</summary>

          {
            getHistoric().map(item => (
              <ItemSuggestion
                key={item.id} // Use o ID único para a chave
                title={item.value} // O valor original da string
                onClick={() => setTextarea(item.value)} // Define o valor no textarea
              />
            ))
          }

            
          </details> 
        </div>

        <div className="content">
          {progress === 'pending' && (
              <div className="box-home">
                <span>Olá, eu sou o</span>
                <h1>teach<span>.me</span></h1>
                <p>
                  Estou aqui para te ajudar nos seus estudos. Selecione um dos tópicos sugeridos ao lado ou digite um tópico que deseja estudar para começarmos
                </p>
              </div>
            )}

          {progress !== 'pending' && (        
          <div className="box-chat">
            {chat[0] && (
              <h1>Você está estudando sobre <span>{chat[0].subject}</span></h1>
            )}

            {chat[1] && (
              <div className="question">
                <h2><img src="./assets/questions.svg" />Pergunta</h2>
                  <p>{chat[1].content}</p>
              </div>
            )}

            {chat[2] && (
              <div className="answer">
                <h2>Sua resposta</h2>
                  <p>{chat[2].content}</p>
              </div>
            )}

            {chat[3] && (
              <div className="feedback">
                <h2>Feedback tach<span>.me</span></h2>
                  <p>{chat[3].content}</p>

              <div className="actions">
                <button onClick={resetChat}>Estudar novo tópico</button>
              </div>
            </div>
            )}

            {Loading && (
                <ThreeDots
                  visible={true}
                  height="30"
                  width="68"
                  color="#d6409f"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: '30px auto' }}
                />
              )}
          </div>)}

        {progress !== 'done' && (
          <div className="box-input">
              <textarea
                value={textarea}
                onChange={element => setTextarea(element.target.value)}
                placeholder={
                  progress === 'started' ? "Insira sua resposta..." : "Insira o tema que deseja estudar..."
                }
              />
            <button onClick={handleSubmitChat}>{
              progress === 'pending' ? 'Enviar Pergunta' : 'Enviar Resposta'}</button>
          </div>
        )}

          <footer className="box-footer">
            <p>tech<span>.me</span></p>
          </footer>
        </div>
      </div>
  )
}

export default App
