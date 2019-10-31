import React from 'react'
import { Header } from '../components'
import styles from 'Styles/index.scss'
import { apiUrl, ibmAccessData } from '../services'
import Axios from 'axios'
import querystring from 'querystring'

export default (props) => {
  const login = ()=>{
    const formData = new FormData()
    formData.append('apikey',ibmAccessData.apiKey)
    formData.append('grant_type',ibmAccessData.grantType)
    const postData = {apiKey:ibmAccessData.apiKey,grant_type:ibmAccessData.grantType}
    const config = {
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
    Axios.post(apiUrl.getToken,querystring.stringify(postData),config).then(console.log)
    /*
    RESPONSE:
    {
      "access_token": "eyJraWQiOiIyMDE5MDcyNCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWQ3Yjg1NGQ2LTdjMDktNGUxYS1hMmI5LTlhNTg0MGNiYmE3NiIsImlkIjoiaWFtLVNlcnZpY2VJZC1kN2I4NTRkNi03YzA5LTRlMWEtYTJiOS05YTU4NDBjYmJhNzYiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1kN2I4NTRkNi03YzA5LTRlMWEtYTJiOS05YTU4NDBjYmJhNzYiLCJzdWIiOiJTZXJ2aWNlSWQtZDdiODU0ZDYtN2MwOS00ZTFhLWEyYjktOWE1ODQwY2JiYTc2Iiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJ1bmlxdWVfaW5zdGFuY2VfY3JucyI6WyJjcm46djE6Ymx1ZW1peDpwdWJsaWM6d2F0c29uLXZpc2lvbi1jb21iaW5lZDp1cy1zb3V0aDphLzcwYzcxMmU0NzU5MTRiMTU4N2IyNDM2NmRiZWJhMWVlOmQ3OWNhMmM2LTdjNTMtNGI4YS05MmVhLTNlMjRlZTQ1NWJjMTo6Il0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjcwYzcxMmU0NzU5MTRiMTU4N2IyNDM2NmRiZWJhMWVlIn0sImlhdCI6MTU3MjQ2NjQ3NSwiZXhwIjoxNTcyNDcwMDc1LCJpc3MiOiJodHRwczovL2lhbS5jbG91ZC5pYm0uY29tL2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.nW1NjLWgHfsg8PSFXxop2UakhSei1ych2cwt4ydG6goLNtM6TVt4V5xKmIEzE4-RCCCNdD48TD0geQLBHR9BDrnbmYrkMeKZDwhX_ASiRE9fEX-AnKUMaTxokNaPx-1MchmvHhdr7g3z9wrCKhL4JQdYWyNnk7beCVw9umUdcan3ujVzeZkbEkjK5F77FJGZYG48Ba6bS5W4QnvfhLl5Bv1SErlIAphdhyuEOUck2SaXs3Z5MhDSqmLOwSMnwl4CqnvY73rBVujZoHaGhoPsRw-J-3L2sMjYeR8etH9wDnHsooh0EsttI-lfxjpR7JYP4bJT7gjeyugUzhlUkPUbAw",
      "refresh_token": "ReUcJ4O4mrlnrVqX1h7F-01klMnbmJAGEnGdmTuJ36gLArDZ4ZsxX0Vyag956V7zGEmyRygYy3vufPYX54tLaHMC1QJqSn0-vcKaS0_7m1AHOC84pdkbQ0XzSoIWYEZySjruH36jePKyCSvhCHyWCZj_6kehIva5kfxPCOiVk0Hl3Nv8JWw_2_WQHht1S9LQFtmpdD8QImN7cba_WT97bVQPFkZFQJy8zfgaC8pkgS7Ym0roFcvHR0hsIQaz-xufcBcm1agwJfgZbs2KuGOSMUcKv5Ywe48rzG8K0ceOxIqATcPEl4ktYAlNpaERZMa5ArfAAko92RKgzEMwvKZv5nmtlWI2bjdQESNQxg7UEXaDkcuhturPIOyDeq5y3t8O45vBxiwX0jAp-RlhlthX4bOMH-E8-mZgaDOTXRQHcg4K9Z9pbvKgm9hiFD58NSlNLHlifH28QeP9jGHR1xljLhn6YHjZ1mt18ApRlJMaN2QZmovrPbXDYzLw2v5AjYiknWvwzztF6EjXiAwWT-IIKT3fJt1Om8y-ld7eQ3tBFgl58-J8SH_1tSM6jgmHvYwfMaRsBTJFrK0YIsH41IIEvK-31wu8HUY8PoqHlFRi9hN9iLZR_1k_Swwc_PAEiwl-7jhgKRzi4jrQrHBGXtrxvZOTqHR5Nytd5EF3fxsCIQKvYzp3SWheGKkCzrdIkWXgUJ3AMDVsfVZ3bqrqSkbzPGsk2kgzzC2XGAwE4CVFTpEwLwIujspV2fR4hUBbuEDjIOhPmbusnGU3ijYsIyHd03xPhOZafpx8y46zEdLip6qLcQcbfyv8w6YgD-1q6Te8-HSLto5ZJAaKsuziCp4JLlHRLh5DeP3lMn4bPk5e4DgJv7stp9FNn-_K5oHfvdACEcvooARVml7RMTTpdLTEgmLhFehrF18cdkdolzafPXR-yH2kAYnjt6o2lXGh03D3Ohjnawzm5eBTls5Qk9L7nw_fHItyk1F5if40IiAwzXzTgi-BO6-GC_Kf3vCJ5KT6fOgi_CwY1DVllw4p_DgnK8QzqKw_h2KIGKb1oRS30V6BOQ",
      "token_type": "Bearer",
      "expires_in": 3600,
      "expiration": 1572470075,
      "scope": "ibm openid"
    }
    */
  }
  return (
    <>
      <Header login={login} />
      <div className={styles.mainWrapper} />
    </>
  )
}
