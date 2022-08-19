import React, {useState, useEffect} from 'react'
import styles from '../styles/robotcontrol.module.css';
import Image from 'next/image';
import battery from '../Assets/battery.png'
import location from '../Assets/location.png'
import planting from '../Assets/planting.png'
import harvesting from '../Assets/harvesting.png'
import maintenance from '../Assets/maintenance.png'
import axios from 'axios';
import { useRouter } from 'next/router';

function robotcontrol() {
    const router = useRouter()
    const [stat, setStat] = useState(false)
    const sendCmd = () => {
       
axios.get("http://172.20.10.2:5000/run").then(() => {
            setStat(true)
        }).catch(() => {
            setStat(false)
        })
        
    }
    const sendCmdstp = () => {
        axios.get("http://172.20.10.2:5000/stop").then(() => {
            setStat(true)
        }).catch(() => {
            setStat(false)
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

        <div className={styles.controls}>
            <div className={styles.camerafeed}>
            <img
                        className={styles.camFeed}
                        src="http://172.20.10.2:8080/?action=stream"
                    />
            </div>

            <div className={styles.seedsbutton} onClick={sendCmd}>
                Plant Seeds 
            </div>

            <div className={styles.seedsbutton} onClick={sendCmdstp}>
                Stop
            </div>
        </div>

        <div className={styles.containerCard}>
            <div className={styles.carsConatiner}>
                <div className={styles.card}>
                    <Image
                        src={battery}
                        alt="Picture of the author"
                        width={45}
                        height={45}
                        onClick={() => router.push('/industries')}
                    />
                    <div className={styles.helperText}>
                        <span className={styles.helperHead}>
                            Battery
                        </span>
                        <br />
                        <span className={styles.helperDown}>100%</span>                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={location}
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Robot Location
                                </span>{' '}
                            </div>
                        </div>
                    </div>
                </div>

        <div className={styles.robotworks}>
            <div className={styles.robotworks_head}>Tomato</div>

            <div className={styles.detailsdiv}>
                <div className={styles.details}>
                    <Image
                        src={planting}
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <p className={styles.detailstext}>Planting</p>
                </div>

                <div className={styles.details}>
                    <Image
                        src={harvesting}
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <p className={styles.detailstext}>Harvesting</p>
                </div>

                <div className={styles.details}>
                    <Image
                        src={maintenance}
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <p className={styles.detailstext}>Maintenance</p>
                </div>
            </div>
        </div>        
    </div>
  );
}

export default robotcontrol;