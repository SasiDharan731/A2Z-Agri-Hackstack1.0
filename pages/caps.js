import React from 'react'
import Image from 'next/image';
import ind_button from '../Assets/indbutton.png';
import styles from '../styles/industries.module.css';
import carrot from '../Assets/carrot.png'

function capsicumindustires() {
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
                    src={carrot}
                    alt="Fruit/Vegetable Image"
                    width={50}
                    height={50}
                />
                <h1 className={styles.fruitname}>Carrot</h1>
            </div>
        </div>

        <div className={styles.indcontainer}>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Alchem Industries</p>
                    <p className={styles.indcard_subhead}><b>Veg Required:</b> 1.5 Tons</p>
                    <p className={styles.indcard_subhead}><b>Variety:</b> Carrot</p>
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
                    <p className={styles.indcard_head}>Caroot Sweets</p>
                    <p className={styles.indcard_subhead}><b>Veg Required:</b> 3 Tons</p>
                    <p className={styles.indcard_subhead}><b>Variety:</b> Carrot</p>
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
                    <p className={styles.indcard_head}>A2Z Agri farms</p>
                    <p className={styles.indcard_subhead}><b>Veg Required:</b> 3.2 Tons</p>
                    <p className={styles.indcard_subhead}><b>Variety:</b> Carrot</p>
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

export default capsicumindustires