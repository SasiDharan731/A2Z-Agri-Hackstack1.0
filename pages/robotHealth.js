import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import robotconnect from '../Assets/robotconnect.svg';

function robotHealth() {
  return (
    <div>

        <div className="pu">
            <div className="topBar">
                <div>
                    <span className="headingHi">Robot A</span> <br />
                    <span className="greeting">Agri Bot</span>
                </div>
            </div>
        </div>

        <div className="robotcontrol_div">
            <Image
                className="robotcontrol_div"
                src={robotconnect}
                alt="Illustration"
            />
        </div>

        <h3 className="c-success-text">Connected Successfully!</h3>
        <h2 className="c-success-text2">Overall Battery Health - 98%</h2>

        <div className="check-cards-div">
            <div className="check-cards">
                <h4 className="check-card-head">Motor Check</h4>
                <p className="check-card-text">6 Motors Perfect Condition</p>
            </div>

            <div className="check-cards">
                <h4 className="check-card-head">Servos Check</h4>
                <p className="check-card-text">4 Servo Motors Perfect Condition</p>
            </div>

            <div className="check-cards">
                <h4 className="check-card-head">Camera Calibration</h4>
                <p className="check-card-text">Calibrated</p>
            </div>

            <div className="check-cards red-card">
                <h4 className="check-card-head">Sensors Calibration</h4>
                <p className="check-card-text">Compass not calibrated</p>
            </div>

            <div className="check-cards">
                <h4 className="check-card-head">Battery Health</h4>
                <p className="check-card-text">96% Perfect Condition</p>
            </div>

            <div className="check-cards">
                <h4 className="check-card-head">Water Flow Check</h4>
                <p className="check-card-text">Perfect Condition</p>
            </div>
        </div>

        <Link href="farmingMode"><div className="button">Start Farming</div></Link>

    </div>
  )
}

export default robotHealth