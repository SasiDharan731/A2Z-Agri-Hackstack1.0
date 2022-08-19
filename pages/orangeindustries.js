import React from 'react'
import Image from 'next/image';
import ind_button from '../Assets/indbutton.png';
import styles from '../styles/industries.module.css';
import orange from '../Assets/orange.png'


function orangeindustries() {
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
                    src={orange}
                    alt="Fruit/Vegetable Image"
                    width={50}
                    height={50}
                />
                <h1 className={styles.fruitname}>Orange</h1>
            </div>
        </div>

        <div className={styles.indcontainer}>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Tropicana</p>
                    <p className={styles.indcard_subhead}>Fruits Required: 5 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Mandarin</p>
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
                    <p className={styles.indcard_subhead}>Variety: Orange</p>
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
                    <p className={styles.indcard_head}>Saint Juices</p>
                    <p className={styles.indcard_subhead}>Fruits Required: 1.5 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Mandarin</p>
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
                    <p className={styles.indcard_head}>Ceres Juices</p>
                    <p className={styles.indcard_subhead}>Fruits Required: 2.2 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Mandarin</p>
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

export default orangeindustries