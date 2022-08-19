import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import selectArea from '../Assets/selectArea.png'

function manualControl() {
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

        <h2 className="chooseCtrl">Choose the Control Center for your Robot</h2>

        <div className="areaselect_div"><Image
            src={selectArea}
            alt="Area"
        /></div>

        <div className="button-fm">Plant Seeds</div>
        <div className="button-fm">Apply Fertilizers</div>
        <div className="button-fm">Watering</div>
        <div className="button-fm">Monitoring</div>

    </div>
  )
}

export default manualControl