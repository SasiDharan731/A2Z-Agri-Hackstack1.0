import React from 'react'
import styles from '../styles/industryPurchaseHistory.module.css'

function industryPurchaseHistory() {
  return (
    <div>

        <div className={styles.pu}>
            <div className={styles.topBar}>
                <div>
                    <span className={styles.headingHi}>Hi, A2Z</span> <br />
                    <span className={styles.greeting}>Good Afternoon!</span>
                </div>
            </div>
        </div>

        <div className={styles.historydiv}>

            <div className={styles.historyCard}>
                <div className={styles.history}>
                    <div><b>Malgoa Mango</b></div>
                    <div><b>Sold to:</b> Mazza Pvt. Ltd</div>
                    <div className={styles.hisDate}>24th November 2021</div>
                </div>

                <div className={styles.purDetails}>
                    <div className={styles.weight}>2.2 Tons</div>
                    <div className={styles.redT}>Rs. 5,26,320</div>
                </div>
            </div>

            <div className={styles.historyCard}>
                <div className={styles.history}>
                    <div><b>Shimla Apple</b></div>
                    <div><b>Sold to:</b> Fizz Pvt. Ltd</div>
                    <div className={styles.hisDate}>2nd January 2022</div>
                </div>

                <div className={styles.purDetails}>
                    <div className={styles.weight}>1.4 TONS</div>
                    <div className={styles.redT}>Rs. 2,38,000</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default industryPurchaseHistory