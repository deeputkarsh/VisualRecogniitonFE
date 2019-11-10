import React, { useState } from 'react'
import { Button, Paper } from '@material-ui/core'
import styles from 'Styles/index.scss'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const isSpeechRecognitionSupported = ('SpeechRecognition' in window)
const recognition = isSpeechRecognitionSupported ? new window.SpeechRecognition() : {}

export default function () {
  if (!isSpeechRecognitionSupported) {
    return (<div>Speech Recgnition API not supported!</div>)
  }
  const [result, setResult] = useState({ text: '', confidence: 0 })

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button color='primary' size='large' variant='contained' onClick={recognition.start}> Classify </Button>
      </div>
      {result.text && result.confidence && (
        <Paper className={styles.resultContainer}>
          <div><strong>Class : </strong>{result.text}</div>
          <div><strong>Score : </strong>{result.confidence}</div>
        </Paper>)}
    </div>
  )
}
