
import React from 'react'
import './Footer.css'

function Privacy() {
    return (
        <div className="privacy-container">
            <h1 className="privacy-header">Privacy Policy</h1>
            <h3 className="privacy-subheader">asHouse Consumers</h3>
            <h4 className="privacy-subheader1">Effective Date: December 15, 2021</h4>
            <p className="policy-use">asHouse Limited its affiliates ("asHouse," the "Company," "we," "us," and "our,")
                respect your privacy and is committed to protecting it through its compliance with its privacy policies.
                This policy describes:
            </p>
            <h2 className="privacy-subheader">The information we collect</h2>
            <ul className="list">

                Collect several types of information from and about users of our Services given below:

                <li>
                    Personal Information that can be associated with a specific person and could be used to identify that specific person whether from that data, or from the data and other information that we have, or is likely to have access to
                    have a correct person accessing the app
                </li>

                <li>
                    Information about your internet connection, the equipment you use to access our Services and your usage details
                </li>
                <li>
                    Automatically as you navigate through our Services (information collected automatically may include usage details, IP addresses and information collected through cookies,
                    web beacons and other tracking technologies).
                </li>
            </ul>
            <h2 className="privacy-subheader"> Cancellations and Refunds</h2>
            <ul className="list">
                <li>
                    As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order
                    only within one-minute of the order being placed by you. However, subject to your previous cancellation history, asHouse reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.
                </li>
                <li>
                    If you cancel your order after one minute of placing it, asHouse shall have a right to charge you 100% of the order amount as the cancellation fee ,
                    with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners.
                </li>
                <li>
                    asHouse reserves the right to charge you cancellation fee for the orders constrained to be cancelled by asHouse for reasons not attributable to asHouse, including but not limited to:
                    <ol>
                    <li>
                        in the event if the address provided by you is either wrong or falls outside the delivery zone
                    </li>
                    <li>
                         failure to contact you by phone or email at the time of delivering the order booking
                    </li>
                    <li>
                         failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery
                    </li>
                    <li>
                         unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, asHouse will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability
                    </li>
                    </ol>
                    

                </li>
            </ul>
        </div>
    )
}

export default Privacy
