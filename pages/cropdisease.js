import React from 'react'
import Image from 'next/image';
import styles from '../styles/cropdisease.module.css';
import hot from '../Assets/hot.png';
import sun from '../Assets/sun.png';
import water from '../Assets/water.png';
import leaf from '../Assets/leaf.png';

function cropdisease() {
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

        <div className={styles.detail}> 
        
            <div className={styles.card}>
                <Image src={hot} alt="Picture of the author" width={24} height={24} />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>18°</p>
                    <p className={styles.cardtext2}>Temperature</p>
                </div>
            </div>

            <div className={styles.card}>
                <Image src={sun} alt="Picture of the author" width={24} height={24} />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>20%</p>
                    <p className={styles.cardtext2}>Humidity</p>
                </div>
            </div>

            <div className={styles.card}>
                <Image src={water} alt="Picture of the author" width={24} height={24} />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>Clay</p>
                    <p className={styles.cardtext2}>Soil Type</p>
                </div>
            </div>

            <div className={styles.card}>
                <Image src={leaf} alt="Picture of the author" width={24} height={24} />
                <div className={styles.cardtext}>
                    <p className={styles.cardtext1}>CBE</p>
                    <p className={styles.cardtext2}>Location</p>
                </div>
            </div>

        </div>

        <div className={styles.identify}>
            <div className={styles.identifyhead}>Identify the Crop Disease</div>
            
            <div className={styles.purchasebutton}>Scan</div>
            <div className={styles.purchasebutton}>Upload a Pic</div>
        </div> 

        <div className={styles.cropdet}>
            <div className={styles.about}>
                <p className={styles.abouthead}>Late Blight</p>
                <p className={styles.aboutpara}>Late blight, also called potato blight, disease of potato and tomato plants that is caused by the water mold Phytophthora infestans. The disease occurs in humid regions with temperatures ranging between 4 and 29 °C (40 and 80 °F). Hot dry weather checks its spread. Potato or tomato plants that are infected may rot within two weeks. The Great Famine in Ireland in the mid-19th century was caused by late blight of the potato plant. Late blight destroyed more than half of the tomato crop in the eastern United States in 1946, leading to the establishment of a blight-forecasting service in 1947. A number of such forecasting services are maintained at universities and governmental organizations across the world.</p>
            </div>

            <div className={styles.about}>
                <p className={styles.abouthead}>Why this crop</p>
                <p className={styles.aboutpara}>
                    <ul>
                        <li>Plant resistant cultivars when available.</li>
                        <li>Remove volunteers from the garden prior to planting and space plants far enough apart to allow for plenty of air circulation.</li>
                        <li>Water in the early morning hours, or use soaker hoses, to give plants time to dry out during the day — avoid overhead irrigation.</li>
                        <li>Destroy all tomato and potato debris after harvest (see Fall Garden Cleanup).</li>
                    </ul>

                    If symptoms are observed, treat plants with one of the following fungicides:
                    Apply a copper based fungicide (2 oz/ gallon of water) every 7 days or less, following heavy rain or when the amount of disease is increasing rapidly. If possible, time applications so that at least 12 hours of dry weather follows application.
                    Used as a foliar spray, Organocide® Plant Doctor will work its way through the entire plant to prevent fungal problems from occurring and attack existing many problems. Mix 2 tsp/ gallon of water and spray at transplant or when direct seeded crops are at 2-4 true leaf, then at 1-2 week intervals as required to control disease.
                    Safely treat fungal problems with SERENADE Garden. This broad spectrum bio-fungicide uses a patented strain of Bacillus subtilis and is approved for organic use. Best of all, SERENADE is completely non-toxic to honey bees and beneficial insects.
                    Monterey® All Natural Disease Control is a ready-to-use blend of naturally occurring ingredients that control most plant foliar diseases. All stages of the disease is controlled, but applying before infestation gives the best results.
                </p>
            </div>
        </div>

    </div>
  )
}

export default cropdisease