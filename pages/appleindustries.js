import React from 'react'
import Image from 'next/image';
import styles from '../styles/industries.module.css';
import apple from '../Assets/apple.png'
import ind_button from '../Assets/indbutton.png'

function appleindustries() {
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

        <div className={styles.industries}>
            <div className={styles.ind_head}>
                <Image
                    src={apple}
                    alt="Fruit/Vegetable Image"
                    width={50}
                    height={50}
                />
                <h1 className={styles.fruitname}>Apple</h1>
            </div>
        </div>

        <div className={styles.indcontainer}>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Appy Fizz</p>
                    <p className={styles.indcard_subhead}>Fruits Required: 5 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Shimla</p>
                </div>

                <div className={styles.buttondiv}>
                    <Image
                    src={ind_button}
                    alt="Button"
                    width={50}
                    height={50}
                    />
                </div>
            </div>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Minute Maid</p>
                    <p className={styles.indcard_subhead}>Fruits Required: 3 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Shimla</p>
                </div>

                <div className={styles.buttondiv}><Image
                    src={ind_button}
                    alt="Button"
                    width={50}
                    height={50}
                /></div>
            </div>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Tropicana</p>
                    <p className={styles.indcard_subhead}>Fruits Required: 4.5 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Shimla</p>
                </div>

                <div className={styles.buttondiv}><Image
                    src={ind_button}
                    alt="Button"
                    width={50}
                    height={50}
                /></div>
            </div>

        </div>

    </div>
  )
}

export default appleindustries