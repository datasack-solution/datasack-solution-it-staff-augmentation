"use client";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui"
import Image from "next/image";
import { FunctionComponent } from "react";

const benefitsSection1 = [
    {
        title: "Strategic Hiring Efficiency",
        description: "Reduce overhead costs with IT Staffing Agency Riyadh by hiring workers only when needed. This approach ensures financial efficiency and flexibility, paying only for the essential workforce during peak demands.",
        backgroundImageUrl: '/Images/strategic_hiring_efficiency.webp',
        alt:'Trusted recruitment agency in Riyadh for IT professionals, delivering expert talent to meet your business goals effectively.'
    },
    {
        title: "Flexible Workforce",
        description: "IT Outsourcing Company Riyadh increases financial flexibility by converting fixed costs into variable costs, hiring workers for specific durations. This ensures optimal budget management by paying only for necessary expertise.",
        backgroundImageUrl: '/Images/flexible_workforce.webp',
        alt:'Premier IT staffing agency Riyadh for IT staff augmentation, providing skilled talent to drive your projects forward.'
    },
    {
        title: "Precision Staffing",
        description: "Reduce staffing costs with Recruitment Agency in Saudi through just-in-time recruitment, ensuring resources are deployed precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.",
        backgroundImageUrl: '/Images/precision_staffing.webp',
        alt:"Leading recruitment agency in Riyadh for IT staff augmentation, connecting you with top talent to enhance your team's capabilities."
    },
    {
        title: "Rapid Expansion",
        description: "Accelerate growth by scaling up IT Staffing Agency Riyadh to efficiently meet demand. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.",
        backgroundImageUrl: '/Images/rapid_expansion.webp',
        alt:'Efficient IT outsourcing company Riyadh specializing in IT talent, delivering the right skills to elevate your business.'
    },
]

const benefitsSection2 = [
    {
        title: "Core Focus",
        description: "Our Recruitment Agency in Riyadh optimizes productivity by outsourcing non-core tasks to contingent workers, freeing up resources for core business activities and enhancing operational efficiency for our clients.",
        backgroundImageUrl: '/Images/core_focus.webp',
        alt:"Reliable IT outsourcing company Riyadh for hiring IT experts, offering tailored staffing solutions to boost your team's success."
    },
    {
        title: "Onsite Efficiency",
        description: "Optimize travel logistics with expert IT staff augmentation services Riyadh, ensuring rapid consultant availability and prompt support for enhanced client satisfaction and project efficiency.",
        backgroundImageUrl: '/Images/onsite_efficiency.webp',
        alt:'Experienced recruitment agency in Riyadh for tech workforce solutions, providing the expertise needed to enhance your team.'
    },
    {
        title: "Smooth Visa Logistics",
        description: "Utilizing our expert team in logistics and visa processing at our IT Outsourcing Company Riyadh, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.",
        backgroundImageUrl: '/Images/smooth_visa_logistics.webp',
        alt:'Professional IT staffing agency Riyadh for tech talent, dedicated to connecting you with skilled professionals to drive innovation'
    },
    {
        title: 'Resource Deployment',
        description: "Our IT Staffing Agency Riyadh deploys resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction.",
        backgroundImageUrl: '/Images/resource_deployment.webp',
        alt:'Expert IT outsourcing company Riyadh for tailored IT staffing needs, ensuring you find the perfect fit for your team.'
    }
]

const Benefits: FunctionComponent = () => {
    return <div className="benefit-section-wrapper" id="benefit-section">
        <div className="benefit-left-section">
            <h2>Benefits of <span style={{ color: 'orange' }}>Choosing Us</span> - Advanced Recruitment Agency in Riyadh</h2>
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