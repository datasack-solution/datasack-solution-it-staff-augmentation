"use client";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui"
import Image from "next/image";
import { FunctionComponent } from "react";

const benefitsSection1 = [
    {
        title: "Strategic Hiring Efficiency",
        description: "Reduce overhead costs with IT Resource Augmentation Services Riyadh* by hiring workers only when needed. This approach ensures financial efficiency and flexibility, paying only for essential workforce during peak demands.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_CV View.webp',
        alt:'it staff augmentation services riyadh'
    },
    {
        title: "Flexible Workforce",
        description: "IT team augmentation services in Dammam and Riyadh increases financial flexibility by converting fixed costs to variable costs, hiring workers for specific durations. This ensures optimal budget management, paying for necessary expertise.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Work force.webp',
        alt:'it resource augmentation services riyadh'
    },
    {
        title: "Precision Staffing",
        description: " Reduce staffing costs with just-in-time recruitment, ensuring resources deploy precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_precision staffing.webp',
        alt:'it staff augmentation services riyadh'
    },
    {
        title: "Rapid Expansion",
        description: "Accelerate growth by scaling up IT staff augmentation services in Dammam and Riyadh to meet demand efficiently. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Rapid Expansion.webp',
        alt:'it team augmentation services riyadh'
    },
]

const benefitsSection2 = [
    {
        title: "Core Focus",
        description: "Our IT resource augmentation services in Dammam and Riyadh optimize productivity by outsourcing non-core tasks to contingent workers, freeing resources for core business activities and enhancing operational efficiency for our clients.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Core Focus.webp',
        alt:'it staff augmentation services riyadh'
    },
    {
        title: "Onsite Efficiency",
        description: "Optimize travel logistics with expert IT staff augmentation services Riyadh, ensuring rapid consultant availability and prompt support for enhanced client satisfaction and project efficiency.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_onsite.webp',
        alt:'it team augmentation services riyadh'
    },
    {
        title: "Smooth Visa Logistics",
        description: "Utilizing our expert team in logistics and visa processing, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Visa.webp',
        alt:'it staff augmentation services riyadh'
    },
    {
        title: 'Resource Deployment',
        description: "IT staff augmentation services in Dammam and Riyadh deploy our resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Resource Deployment.webp',
        alt:'it resource augmentation services riyadh'
    }
]

const Benefits: FunctionComponent = () => {
    return <div className="benefit-section-wrapper" id="benefit-section">
        <div className="benefit-left-section">
            <h2>Benefits of <span style={{ color: 'orange' }}>Choosing Us</span> - Advanced Recruitment Agencies in Saudi Arabia Riyadh</h2>
            <p >IT Staff Augmentation Services in Dammam and Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
        </div>
        <div className="benefit-content-wrapper">
            <EuiFlexGroup alignItems="center" justifyContent="center" responsive={true} wrap>
                {benefitsSection1.map((benefit, idx) => (
                    <EuiFlexItem key={idx} className="custom-flex-item">
                        <article className="card">
                            <Image width={400} height={200} className="card__background" src={benefit.backgroundImageUrl} alt={benefit.alt} />
                            <div >
                                <div className="card__content--container | flow" >
                                    <h2 className="card__title">{benefit.title}</h2>
                                    <p className="card__description">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </EuiFlexItem>
                ))}
            </EuiFlexGroup>

            {/* ----------------------next section--------------------- */}
            <div style={{ height: '50px' }}></div>
            <EuiFlexGroup alignItems="center" justifyContent="center" responsive={true} wrap>
                {benefitsSection2.map((benefit, idx) => (
                    <EuiFlexItem key={idx} className="custom-flex-item">
                        <article  className="card" >
                        <Image width={400} height={200} className="card__background" src={benefit.backgroundImageUrl} alt={benefit.alt} />
                        <div >
                                <div  className="card__content--container | flow" >
                                    <h2  className="card__title">{benefit.title}</h2>
                                    <p  className="card__description">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </EuiFlexItem>
                ))}
            </EuiFlexGroup>
        </div>
    </div>
}

export default Benefits