import React from 'react'
import styles from '../styles/robotconnect.module.css';
import Link from 'next/link';
import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function robotconnect() {
    const [code, setCode] = useState()
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
  
    const handleChange = (e) => {
      let userCode = e.target.value
      setCode(userCode)
    }
    
    const upload = () => {
      setLoading(true)
      axios.post('http://172.20.10.3:8081/connect', {
        "pass" : code
      }).then((data) => {
          console.log(data.data);
          setStatus(data.data)
          setLoading(false)
         
          router.push('/robotHealth')
   
      })
    }
  return (
    <div>
        <div>
            <div className={styles.pu}>
                <div className={styles.topBar}>
                    <div onClick={() => router.push('/dashboard')}>
                        <span className={styles.headingHi}>Hi, A2Z</span> <br />
                        <span className={styles.greeting}>Good Afternoon!</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.enter_details}>
            <p className={styles.det_text}>Enter Robot Code</p>
            <input className={styles.inputbox} type="text" />


            <div onClick={upload} className={styles.seedsbutton}>
                {
                    loading ?
                    <div className="">Connecting..</div>
                    :
                    <div className="">Connect</div>
                }
    
            </div>
          

            <div className={styles.seedsbutton}>
                
                {
                  status === 'Wrong code'?
                  <div className="">Wrong code</div>
                  :
                  null
                }
    
            </div>
        </div>

    </div>
  )
}

export default robotconnect