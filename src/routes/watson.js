import React from 'react'
import Axios from 'axios'
import { TextField, FormControl, Button } from '@material-ui/core'

const apiData = {
  apikey: 'cm3HgaDCSOtpgHRBRkor37HkR_3L93XAWLqOfZsuYlBV',
  iam_apikey_description: 'Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:watson-vision-combined:us-south:a/70c712e475914b1587b24366dbeba1ee:d79ca2c6-7c53-4b8a-92ea-3e24ee455bc1::',
  iam_apikey_name: 'auto-generated-apikey-2197dfa2-0a81-453e-b7e2-be56c1110e4c',
  iam_role_crn: 'crn:v1:bluemix:public:iam::::serviceRole:Writer',
  iam_serviceid_crn: 'crn:v1:bluemix:public:iam-identity::a/70c712e475914b1587b24366dbeba1ee::serviceid:ServiceId-d7b854d6-7c09-4e1a-a2b9-9a5840cbba76',
  url: 'https://gateway.watsonplatform.net/visual-recognition/api',
  tokenUrl: 'https://iam.cloud.ibm.com/identity/token',
  grant_type: 'urn:ibm:params:oauth:grant-type:apikey'
}
const data = {
  apikey: 'cm3HgaDCSOtpgHRBRkor37HkR_3L93XAWLqOfZsuYlBV',
  grant_type: 'urn:ibm:params:oauth:grant-type:apikey'
}
const formData = new FormData()
formData.append('apikey',apiData.apikey)
formData.append('grant_type',apiData.grant_type)
Axios.post(apiData.tokenUrl,formData).then(console.log)

function Hacathon2 () {
  const [image, setImage] = React.useState('')
  let fileData, binaryData
  const apiUrl = 'https://automl.googleapis.com/v1beta1/projects/shining-sign-232310/locations/us-central1/models/ICN5184506474459578463:predict'
  const bearerToken = ''

  const onFileInputChange = function (event) {
    const { files } = event.target
    fileData = files[0]
    getFileData()
    setImage(event.target.value)
  }

  function callApi () {
    if (!binaryData) {
      return
    }
    const headers = { Authorization: `Bearer ${bearerToken}` }
    const data = {
      payload: { image: { imageBytes: binaryData } }
    }
    // const onApiError = (error) => { this.setState({ error }) }
    const response = Axios.post(apiUrl, data, { headers }).then(console.log).catch(console.log)
    console.log(response.data)
  }

  function getFileData () {
    const { FileReader } = window
    if (fileData) {
      const base64Reader = new FileReader()
      base64Reader.onload = _ => {
        setImage(base64Reader.result)
      }
      base64Reader.readAsDataURL(fileData)
      const binaryReader = new FileReader()
      binaryReader.onload = _ => {
        binaryData = binaryReader.result
      }
      binaryReader.readAsBinaryString(fileData)
    }
  }

  return (
    <div className='watson'>
      <div>
        <input type='file' accept='image/png, image/jpg' onChange={onFileInputChange} />
      </div>
      <div><img src={image} alt='uploaded' /></div>
      <Button onClick={event => callApi(event)}>Upload</Button>
    </div>
  )
}

export default Hacathon2
