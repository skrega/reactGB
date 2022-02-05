import logo from './logo.svg'
import './App.css'
import { Form } from './components/Form'
import { useEffect, useRef, useState } from 'react'
import { AUTORHS } from './components/utils/constants'
import { MessageList } from './components/MessageList'
import { FormMui } from './components/FormMui'
import { Chats } from './components/Chats'

// const chats = [
//   {
//     name: 'Chat1',
//     id: '1',
//   },
//   {
//     name: 'Chat2',
//     id: '2',
//   },
// ]

function App() {
  const [messageList, setMessageList] = useState([
    //стэйт со списком сообщений
    // { text: 'msg1', author: AUTORHS.ME },
    // { text: 'i am a bot', author: AUTORHS.BOT },
  ])
  const messagesEnd = useRef()

  const handleAddMessage = (text) => {
    sendMessage(text, AUTORHS.ME)
  }

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    }
    setMessageList((prevMessageLits) => [...prevMessageLits, newMsg])
  }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView()

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
    <div className="App">
      <div className="wrapper">
        <Chats />
        <div className="inner">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-content">
            <MessageList messages={messageList} />
            <div ref={messagesEnd} />
          </div>
          <FormMui onSubmit={handleAddMessage} />
        </div>
      </div>
    </div>
  )
}

export default App
