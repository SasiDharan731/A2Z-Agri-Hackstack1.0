import React from 'react'
import styles from '../styles/robotconnect.module.css';
import Link from 'next/link';

function robotconnect() {
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


            <Link href="robotHealth"><div className={styles.seedsbutton}>
                Connect 
            </div></Link>
        </div>

    </div>
  )
}

export default robotconnect