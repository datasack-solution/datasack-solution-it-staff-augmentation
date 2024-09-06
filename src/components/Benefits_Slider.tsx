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
        description: "Reduce overhead costs with IT Resource Augmentation Services Riyadh by hiring workers only when needed. This approach ensures financial efficiency and flexibility, paying only for essential workforce during peak demands.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_CV View.webp',
        alt:'Recruitment Agency in Riyadh'
    },
    {
        title: "Flexible Workforce",
        description: "IT team augmentation services Riyadh increases financial flexibility by converting fixed costs to variable costs, hiring workers for specific durations. This ensures optimal budget management, paying for necessary expertise.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Work force.webp',
        alt:'Recruitment agencies in Saudi Arabia Riyadh'
    },
    {
        title: "Precision Staffing",
        description: "Reduce staffing costs with just-in-time recruitment, ensuring resources deploy precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_precision staffing.webp',
        alt:'Recruitment Agency in Riyadh'
    },
    {
        title: "Rapid Expansion",
        description: "Accelerate growth by scaling up IT staff augmentation services Riyadh to meet demand efficiently. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Rapid Expansion.webp',
        alt:'Recruitment agencies in Saudi Arabia Riyadh'
    },
    {
        title: "Core Focus",
        description: "Our IT resource augmentation services Riyadh optimize productivity by outsourcing non-core tasks to contingent workers, freeing resources for core business activities and enhancing operational efficiency for our clients.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Core Focus.webp',
        alt:'Recruitment Agency in Riyadh'
    },
    {
        title: "Onsite Efficiency",
        description: "Optimize travel logistics with expert IT staff augmentation services Riyadh, ensuring rapid consultant availability and prompt support for enhanced client satisfaction and project efficiency.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_onsite.webp',
        alt:'Recruitment agencies in Saudi Arabia Riyadh'
    },
    {
        title: "Smooth Visa Logistics",
        description: "Utilizing our expert team in logistics and visa processing, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Visa.webp',
        alt:'Recruitment Agency in Riyadh'
    },
    {
        title: 'Resource Deployment',
        description: "IT staff augmentation services Riyadh deploy our resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction.",
        backgroundImageUrl: '/benefits-webp-1000x684/DSS-Website-Elements_Resource Deployment.webp',
        alt:'Recruitment agencies in Saudi Arabia Riyadh'
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
