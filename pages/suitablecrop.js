import React from 'react'
import styles from '../styles/suitablecrop.module.css';
import Image from 'next/image';
import hot from '../Assets/hot.png';
import sun from '../Assets/sun.png'
import water from '../Assets/water.png'
import leaf from '../Assets/leaf.png'
import scan from '../Assets/spiralscan.png'
import yie from '../Assets/yield.png'
import income from '../Assets/income.png'
import efficiency from '../Assets/efficiency.png'

function suitablecrop() {
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

        <div className={styles.detail}>
            <div className={styles.card}>
                <Image
                    src={hot}
                    alt="Picture of the author"
                    width={24}
                    height={24}
                />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>18°</p>
                    <p className={styles.cardtext2}>Temperature</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <Image
                        src={sun}
                        alt="Picture of the author"
                        width={24}
                        height={24}
                    />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>20%</p>
                    <p className={styles.cardtext2}>Humidity</p>
                </div>
            </div>

            <div className={styles.card}>
                <Image
                    src={water}
                    alt="Picture of the author"
                    width={24}
                    height={24}
                />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>Clay</p>
                    <p className={styles.cardtext2}>Soil Type</p>
                </div>
            </div>

                <div className={styles.card}>
                    <Image
                        src={leaf}
                        alt="Picture of the author"
                        width={24}
                        height={24}
                    />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>CBE</p>
                    <p className={styles.cardtext2}>Location</p>
                </div>
            </div>
        </div> 

        <div className={styles.cropdiseasediv}>
                        <Image
                            src={scan}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        />
                    </div>

                    <div className={styles.robotworks}>
                        <div className={styles.robotworks_head}>Tomato</div>

                        <div className={styles.detailsdiv}>
                            <div className={styles.details}>
                                <Image
                                    src={yie}
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <p className={styles.detailstext}>Planting</p>
                            </div>

                            <div className={styles.details}>
                                <Image
                                    src={income}
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <p className={styles.detailstext}>Harvesting</p>
                            </div>

                            <div className={styles.details}>
                                <Image
                                    src={efficiency}
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <p className={styles.detailstext}>
                                    Maintenance
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cropdet}>
                        <div className={styles.about}>
                            <p className={styles.abouthead}>About the crop</p>
                            <p className={styles.aboutpara}>
                                A tomato is a nutrient-dense superfood that
                                offers benefit to a range of bodily systems. Its
                                nutritional content supports healthful skin,
                                weight loss, and heart health. <br />
                                <br />
                                Tomatoes are the major dietary source of the
                                antioxidant lycopene, which has been linked to
                                many health benefits, including reduced risk of
                                heart disease and cancer. <br />
                                <br />
                                They are also a great source of vitamin C,
                                potassium, folate, and vitamin K. <br />
                                <br />
                                Usually red when mature, tomatoes can also come
                                in a variety of colors, including yellow,
                                orange, green, and purple. What’s more, many
                                subspecies of tomatoes exist with different
                                shapes and flavor.
                            </p>
                        </div>

                        <div className={styles.about}>
                            <p className={styles.abouthead}>Why this crop</p>
                            <p className={styles.aboutpara}>
                                Tomato has the efficiency to give more yield and
                                also more income to the farmer as per the data
                                of your location, weather, climate, soil type
                                and market best crop. Grow tomato now is the
                                perfect time to achieve more yield and it has
                                the efficieny to give more income.
                            </p>
                        </div>

                        {/* <div className={styles.purchasebutton}>Purchase</div> */}
                    </div>
                {/* </div>    */}
    </div>
  )
}

export default suitablecrop