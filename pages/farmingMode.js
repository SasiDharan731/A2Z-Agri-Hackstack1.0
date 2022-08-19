import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import robotconnect from '../Assets/robotconnect.svg';

function farmingMode() {
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

        <h2 className="chooseCtrl">Choose the Control Center for your Robot</h2>

        <Link href="robotcontrol"><div className="button-fm">Automatic</div></Link>
        <Link href="/"><div className="button-fm">Manual</div></Link>
    </div>
  )
}

export default farmingMode