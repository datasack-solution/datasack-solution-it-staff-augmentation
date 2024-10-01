"use client";
import {
    EuiPage,
    EuiPageBody
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Image from 'next/image';
import { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
};

const benefits = [
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

const BenefitsSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleAfterChange = (current: number) => {
        setActiveSlide(current);
    };
    return (
    <EuiPage style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
    <EuiPageBody>
        <div className="benefit-slider">
            <Slider {...settings} afterChange={handleAfterChange}>
                {benefits.map((benefit, index) => (
                    <div key={index} className={`benefit-card-wrapper-mobile ${activeSlide === index ? 'active' : ''}`}>
                        <article className="card-mobile benefit-card">
                            <Image width={200} height={150} className="card__background-mobile" src={benefit.backgroundImageUrl} alt={benefit.alt} />
                            <div className="title-overlay">
                                <h3>{benefit.title}</h3>
                            </div>
                            <div className={`description-overlay ${activeSlide === index ? 'show' : ''}`}>
                                <p>{benefit.description}</p>
                            </div>
                        </article>
                    </div>
                ))}
            </Slider>
        </div>
    </EuiPageBody>
</EuiPage>
);
}

export default BenefitsSlider;
