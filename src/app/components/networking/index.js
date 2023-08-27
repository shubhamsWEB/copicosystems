/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Networking = () => {
    return (
        <>
            <div id="networking" className="services section">
                <div>
                    <div className="grid grid-cols-1">
                        <div className='md:px-20 px-4'>
                            <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                <h3>Empower Your Business with Seamless <em>RDP Networking Connectivity</em></h3>
                                <img src="/heading-line-dec.png" alt="" />
                                <p>Imagine a world where geographic barriers are mere illusions. Our RDP networking connectivity service empowers you to establish seamless connections between your server and countless clients, enabling efficient communication and collaboration regardless of distance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 md:px-28 px-8">
                        <div>
                            <div className="service-item first-service">
                                <div className="icon"></div>
                                <h4>Effortless Expansion</h4>
                                <p>Expand your business horizons by effortlessly connecting your server to an extensive network of clients. Our RDP connectivity bridges gaps and opens doors to new opportunities.</p>
                            </div>
                        </div>
                        <div>
                            <div className="service-item second-service">
                                <div className="icon"></div>
                                <h4>Data Sovereignty</h4>
                                <p>Your data remains exclusively within your server environment, ensuring unparalleled privacy and security. Maintain complete control over your critical information while benefiting from seamless connectivity.</p>
                            </div>
                        </div>
                        <div>
                            <div className="service-item third-service">
                                <div className="icon"></div>
                                <h4>Enhanced Collaboration</h4>
                                <p>Collaborate with clients as if they were right next to you. Our RDP networking solution enables real-time interaction, file sharing, and application access for unparalleled collaboration.</p>
                            </div>
                        </div>
                        <div>
                            <div className="service-item fourth-service">
                                <div className="icon"></div>
                                <h4>Optimized Efficiency</h4>
                                <p>Experience enhanced operational efficiency as you manage and serve your clients from a centralized server. Say goodbye to redundancies and data replication.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 mt-10">
                        <div>
                            <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                <h3>Fitment of <em>RDP Networking Connectivity</em> for your business</h3>
                                <img src="/heading-line-dec.png" alt="Copico systems" />
                                <p>Imagine a world where geographic barriers are mere illusions. Our RDP networking connectivity service empowers you to establish seamless connections between your server and countless clients, enabling efficient communication and collaboration regardless of distance.</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-4 md:px-28 px-8'>
                        <div className="service-item third-service">
                        <div className="icon"></div>
                            <h1>Scenario 1</h1>
                            <h4>ABC Traders</h4>
                            <p>ABC Traders, with a head office and 2 branches, uses our service. Five users at the head office and one user at each branch efficiently use Accounting software. Data is centralized at the head office, ensuring seamless collaboration and data management.</p>

                        </div>
                        <div className="service-item third-service">
                        <div className="icon"></div>
                            <h1>Scenario 2</h1>
                            <h4> Ace Electronics</h4>
                            <p>Ace Electronics operations thrive with precision. With 6 users at the head office and 3 at each branch. Owner Mr. Jhon and the finance head access there Accounting software remotely. Data consolidation from all branches to the head office streamlines insights and management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Networking