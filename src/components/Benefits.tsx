"use client";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui"
import Image from "next/image";
import { FunctionComponent } from "react";

const benefitsSection1 = [
    {
        title: "Strategic Hiring Efficiency",
        description: "Reduce overhead costs with IT Resource Augmentation Services Riyadh by hiring workers only when needed. This approach ensures financial efficiency and flexibility, paying only for essential workforce during peak demands.",
        backgroundImageUrl: '/Benefits/hiring.webp',
        alt:'Trusted recruitment agency in Riyadh for IT professionals'
    },
    {
        title: "Flexible Workforce",
        description: "IT team augmentation services Riyadh increases financial flexibility by converting fixed costs to variable costs, hiring workers for specific durations. This ensures optimal budget management, paying for necessary expertise.",
        backgroundImageUrl: '/Benefits/workforce.webp',
        alt:'Premier recruitment agencies in Saudi Arabia Riyadh for IT staff augmentation'
    },
    {
        title: "Precision Staffing",
        description: "Reduce staffing costs with just-in-time recruitment, ensuring resources deploy precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.",
        backgroundImageUrl: '/Benefits/staffing.webp',
        alt:'Leading recruitment agency in Riyadh for IT staff augmentation'
    },
    {
        title: "Rapid Expansion",
        description: "Accelerate growth by scaling up IT staff augmentation services Riyadh to meet demand efficiently. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.",
        backgroundImageUrl: '/Benefits/expansion.webp',
        alt:'Efficient recruitment agencies in Saudi Arabia Riyadh specializing in IT talent'
    },
]

const benefitsSection2 = [
    {
        title: "Core Focus",
        description: "Our IT resource augmentation services Riyadh optimize productivity by outsourcing non-core tasks to contingent workers, freeing resources for core business activities and enhancing operational efficiency for our clients.",
        backgroundImageUrl: '/Benefits/core focus.webp',
        alt:'Reliable recruitment agency in Riyadh for hiring IT experts'
    },
    {
        title: "Onsite Efficiency",
        description: "Optimize travel logistics with expert IT staff augmentation services Riyadh, ensuring rapid consultant availability and prompt support for enhanced client satisfaction and project efficiency.",
        backgroundImageUrl: '/Benefits/onsite.webp',
        alt:'Experienced recruitment agencies in Saudi Arabia Riyadh for tech workforce solutions'
    },
    {
        title: "Smooth Visa Logistics",
        description: "Utilizing our expert team in logistics and visa processing, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.",
        backgroundImageUrl: '/Benefits/visa.webp',
        alt:'Professional recruitment agency in Riyadh for tech talent'
    },
    {
        title: 'Resource Deployment',
        description: "IT staff augmentation services Riyadh deploy our resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction.",
        backgroundImageUrl: '/Benefits/resource development.webp',
        alt:'Expert recruitment agencies in Saudi Arabia Riyadh for tailored IT staffing needs'
    }
]

const Benefits: FunctionComponent = () => {
    return <div className="benefit-section-wrapper" id="benefit-section">
        <div className="benefit-left-section">
            <h2>Benefits of <span style={{ color: 'orange' }}>Choosing Us</span> - Advanced Recruitment Agencies in Saudi Arabia Riyadh</h2>
            <p >IT Staff Augmentation Services Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
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