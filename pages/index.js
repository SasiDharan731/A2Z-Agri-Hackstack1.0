import React from 'react';
import styles from '../styles/Dashboard.module.css';
import Image from 'next/image';
import NextButton from '../Assets/next.png';
import NextBlack from '../Assets/black.png';
import addBtn from '../Assets/plus.png';
import hot from '../Assets/hot.png';
import sun from '../Assets/sun.png';
import water from '../Assets/water.png';
import leaf from '../Assets/leaf.png';
import map from '../Assets/map.png';
import { useRouter} from 'next/router';
// import Bounce from 'react-reveal/Bounce';
import {useState, useEffect} from 'react'
import axios from 'axios';
function Dashboard() {
    const router = useRouter();
    const [temp, setTemp] = useState(32)
    const [humid, setHumid] = useState(63)
    useEffect(() => {
        axios.get("http://172.20.10.2:5000/temp").then((data) => {
            if(data != undefined){
                setTemp(32)
            }
            
        }).catch((err) => {
            setTemp(32)
        })
        axios.get("http://172.20.10.2:5000/humid").then((data) => {
            if(data != undefined){
                setHumid(62)
            }
        }).catch((err) => {
            setHumid(63)
        })
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.pu}>
                <div className={styles.topBar}>
                    <div>
                        <span className={styles.headingHi}>Hi, A2Z</span> <br />
                        <span className={styles.greeting}>Good Afternoon!</span>
                    </div>
                </div>
            </div>
            <div className={styles.tip}>
                <div className={styles.textConatiner}>
                    <h3 className={styles.heading}>Tip of the day</h3>
                    <p className={styles.tipText}>
                        5 ways to keep your plants healthy
                    </p>
                </div>
                <div className={styles.button}>
                    <Image
                        src={NextButton}
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            <div className={styles.select}>
                <div className={styles.robot}>
                    <div className={styles.add}>
                        <Image
                            src={addBtn}
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            onClick={() => router.push('/robotconnect')}
                        />
                    </div>
                    <div className={styles.robotSelect}>
                        <div className={styles.options}>
                            <div
                                className={styles.bot1}
                                onClick={() => router.push('/robotcontrol')}
                            >
                                <p>Robot A</p>
                            </div>

                            <div className={styles.bot2}>
                                <p>Robot B</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.containerCard}>
                <div className={styles.carsConatiner}>
                    {/* <Bounce cascade> */}
                        <div className={styles.card}>
                            <Image
                                src={hot}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />
                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>{`${temp}°`}</span>{' '}
                                <br />
                                <span className={styles.helperDown}>
                                    Temprature
                                </span>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={sun}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>Clay</span>{' '}
                                <br />
                                <span className={styles.helperDown}>
                                    Soil type
                                </span>
                            </div>
                        </div>
                    {/* </Bounce> */}
                </div>
            </div>
            <div className={styles.containerCard}>
                <div className={styles.carsConatiner}>
                    {/* <Bounce cascade> */}
                        <div className={styles.card}>
                            <Image
                                src={water}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>{`${humid}%`}</span>{' '}
                                <br />
                                <span className={styles.helperDown}>
                                    Humidity
                                </span>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={leaf}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>BLR</span>{' '}
                                <br />
                                <span className={styles.helperDown}>
                                    Location
                                </span>
                            </div>
                        </div>
                    {/* </Bounce> */}
                </div>
            </div>
            <div className={styles.cropsGrow}>
                <div>
                    <p className={styles.cropsText}>
                        Identify the perfect crop to grow
                    </p>
                </div>
                <div className={styles.blackNext}>
                    <Image
                        src={NextBlack}
                        alt="Picture of the author"
                        width={30}
                        height={30}
                        onClick={() => router.push('/suitablecrop')}
                    />
                </div>
            </div>

            <div className={styles.farmHealth}>
                <div className={styles.pu}>
                    <h3 className={styles.farmHead}>Farm Health</h3>
                </div>
                <div
                    className={styles.mapConatiner}
                    onClick={() => router.push('/cropdisease')}
                >
                    <Image
                        src={map}
                        alt="Picture of the author"
                        layout="fill"
                    />
                </div>
            </div>
            {/* <Bounce> */}
                <div className={styles.cropsGrow}>
                    <div>
                        <p className={styles.cropsText}>
                            Market Place - Sell your yield directly to
                            industries
                        </p>
                    </div>
                    <div className={styles.blackNext}>
                        <Image
                            src={NextBlack}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                            onClick={() => router.push('/marketplace')}
                        />
                    </div>
                </div>
            {/* </Bounce> */}
        </div>
    );
}

export default Dashboard;
