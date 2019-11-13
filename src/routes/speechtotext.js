import React, { useState } from 'react'
import { Button, Paper } from '@material-ui/core'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const recognition = window.SpeechRecognition ? new window.SpeechRecognition() : {}

export default function () {
  if (!window.SpeechRecognition) {
    return (<div>Speech Recgnition API not supported!</div>)
  }
  const [result, setResult] = useState({ text: '', confidence: 0 })
  const [isListening, setIsListening] = useState(false)

  recognition.onsoundstart = _ => setIsListening(true)
  recognition.onsoundend = _ => setIsListening(false)
  recognition.onresult = (event) => {
    const result = event.results[0][0]
    setResult({ text: result.transcript, confidence: result.confidence })
  }

  const startStopListening = _ => {
    isListening ? recognition.stop() : recognition.start()
  }
  return (
    <div>
      <Paper className='result-container'>
        <div>{isListening ? 'Listening' : 'Ready to Listen'}</div>
        {result.text ? <div><strong>Text : </strong>{result.text}</div> : null}
        {result.confidence ? (<div><strong>Confidence : </strong>{result.confidence}</div>) : null}
      </Paper>
      <div className='button-container'>
        <Button color='primary' size='large' variant='contained' onClick={_ => startStopListening()}> Start/Stop </Button>
      </div>

    </div>
  )
}
