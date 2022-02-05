import logo from './logo.svg'
import './App.css'
import { Form } from './components/Form'
import { useEffect, useState } from 'react'
import { AUTORHS } from './components/utils/constants'
import { MessageList } from './components/MessageList'

function App() {
  const [messageList, setMessageList] = useState([
    //стэйт со списком сообщений
    // { text: 'msg1', author: AUTORHS.ME },
    // { text: 'i am a bot', author: AUTORHS.BOT },
  ])

  const handleAddMessage = (text) => {
    sendMessage(text, AUTORHS.ME)
  }

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
    }
    setMessageList((prevMessageLits) => [...prevMessageLits, newMsg])
  }

  useEffect(() => {
    let timeout
    if (messageList[messageList.length - 1]?.author === AUTORHS.ME) {
      timeout = setTimeout(() => {
        sendMessage('hello, i am bot', AUTORHS.BOT)
      }, 1000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [messageList])

  return (
    <>
      <h2>Fragment</h2>
      <div className="App">
        <div className="App-content">
          <img src={logo} className="App-logo" alt="logo" />
          <MessageList messages={messageList} />
          <Form onSubmit={handleAddMessage} />
        </div>
      </div>
    </>
  )
}

export default App
