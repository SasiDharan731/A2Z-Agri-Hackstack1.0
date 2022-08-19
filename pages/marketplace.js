import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import mango from '../Assets/mango.png'
import apple from '../Assets/apple.png'
import orange from '../Assets/orange.png'
import guava from '../Assets/guava.png'
import capsicum from '../Assets/capsicum.png'
import brinjal from '../Assets/eggplant.png'
import tomato from '../Assets/tomato.png'
import okra from '../Assets/okra.png'
import sunflowerseed from '../Assets/sunflowerseed.png'
import appleseed from '../Assets/appleseed.png'
import tomatoseed from '../Assets/tomatoseed.png'
import corianderseed from '../Assets/corianderseed.png'
import styles from '../styles/marketplace.module.css';

function marketplace() {
    const router = useRouter();
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

        <div className={styles.scrolldiv}></div>
            <div className={styles.scroll}>
                <div className={styles.element1}>Fruits</div>
                <div className={styles.element}>Vegetables</div>
                <div className={styles.element}>Seeds</div>
                <div className={styles.element}>Fertilizers</div>
            </div>

            <div className={styles.sell}>
                <div className={styles.head}>Fruits</div>

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div
                            className={styles.card}
                            onClick={() => router.push('/industries')}
                        >
                            <Image
                                src={mango}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>Mango</span>{' '}
                            </div>
                        </div>

                        <div
                            className={styles.card}
                            onClick={() => router.push('/appleindustries')}
                        >
                            <Image
                                src={apple}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>Apple</span>{' '}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div
                            className={styles.card}
                            onClick={() => router.push('/orangeindustries')}
                        >
                            <Image
                                src={orange}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Orange
                                </span>{' '}
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={guava}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>Guava</span>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sell}>
                <div className={styles.head}>Vegetables</div>

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div
                            className={styles.card}
                            onClick={() => router.push('/caps')}
                        >
                            <Image
                                src={capsicum}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Capsicum
                                </span>{' '}
                            </div>
                        </div>

                        <div
                            className={styles.card}
                            onClick={() => router.push('/brinjalindustries')}
                        >
                            <Image
                                src={brinjal}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Brinjal
                                </span>{' '}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div
                            className={styles.card}
                            onClick={() => router.push('/tomatoindustires')}
                        >
                            <Image
                                src={tomato}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Tomato
                                </span>{' '}
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={okra}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>Okra</span>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sell}>
                <div className={styles.head}>Seeds</div>

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div className={styles.card}>
                            <Image
                                src={sunflowerseed}
                                alt="Picture of the author"
                                width={48}
                                height={48}
                            />
                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Sunflower Seed
                                </span>{' '}
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={appleseed}
                                alt="Picture of the author"
                                width={48}
                                height={48}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Apple seed
                                </span>{' '}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div className={styles.card}>
                            <Image
                                src={tomatoseed}
                                alt="Picture of the author"
                                width={48}
                                height={48}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Tomato Seed
                                </span>{' '}
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={corianderseed}
                                alt="Picture of the author"
                                width={48}
                                height={48}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Corinader Seed
                                </span>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default marketplace