import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { Button, Paper } from '@material-ui/core'
import { visualRecog } from '../services'
import styles from 'Styles/index.scss'

export default function () {
  const [image, setImage] = useState('')
  const [result, setResult] = useState({ class: '', score: 0 })
  const fileInput = useRef(null)

  const onFileInputChange = function (event) {
    setImageToRender(event.target.files[0])
  }

  async function callApi () {
    if (!fileInput || !fileInput.current || !fileInput.current.files) {
      return
    }
    const auth = window.btoa(`apikey:${visualRecog.apiKey}`)
    const config = {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const formData = new FormData() // eslint-disable-line no-undef
    formData.append('images_file', fileInput.current.files[0])
    formData.append('classifier_ids', 'DefaultCustomModel_1229742937')
    formData.append('threshold', 0.6)
    const response = await Axios.post(visualRecog.apiUrl, formData, config)
    if (response.data && response.data.images && response.data.images.length) {
      const result = response.data.images[0].classifiers[0].classes[0]
      setResult({ class: result.class, score: result.score * 100 })
    }
  }

  function setImageToRender (fileData) {
    if (fileData) {
      const base64Reader = new FileReader() // eslint-disable-line no-undef
      base64Reader.onload = _ => {
        setImage(base64Reader.result)
      }
      base64Reader.readAsDataURL(fileData)
    }
  }

  return (
    <div className='watson'>
      <Paper className={styles.imageContainer}>
        <input
          accept='image/*'
          ref={fileInput}
          style={{ display: 'none' }}
          id='raised-button-file'
          type='file'
          onChange={onFileInputChange}
        />
        {image
          ? (<img src={image} alt='uploaded' />)
          : (
            <label className={styles.uploadContainer} htmlFor='raised-button-file'>
              <span> Upload Image</span>
            </label>
          )}
      </Paper>
      <div className={styles.buttonContainer}>
        <Button color='primary' size='large' variant='contained' onClick={callApi}> Classify </Button>
      </div>
      {result.class && result.score && (
        <Paper className={styles.resultContainer}>
          <div><strong>Class : </strong>{result.class}</div>
          <div><strong>Score : </strong>{result.score}</div>
        </Paper>)}
    </div>
  )
}
