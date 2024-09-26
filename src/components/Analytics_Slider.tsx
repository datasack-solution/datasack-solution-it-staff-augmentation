"use client";
import {
  EuiCard,
  EuiFlexItem,
  EuiSpacer
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const analyticsIcons=[
  {
    id:1,
    title:'Contract Staffing',
    description:'Access Skilled IT contractors to meet your project-based needs',
    image:"/Icons/contract_staffing.webp"
  },
  {
    id:2,
    title:'Remote Hiring',
    description:'Source and onboard talented IT professionals from anywhere in the world',
    image:"/Icons/remote_hiring.webp"
  },
  {
    id: 3,
    title: "Key Statistics",
    description: 'Experts ready in 2 weeks, 8% available to join instantly—rated 4.9/5 on Clutch',
    image:"/Icons/key_statistics.webp"
  },
  {
    id:4,
    title:'Payroll Outsourcing',
    description:'Simplify payroll administration and ensure compliance',
    image:"/Icons/payroll_outsourcing.webp"
  },
  {
    id:5,
    title:'Global Mobility',
    description:'Facilitate seamless employee relocation and cross-based assignments',
    image:"/Icons/global_mobility.webp"
  }
]

const cardNodes = analyticsIcons.map(function (item, index) {
  return (
    <EuiFlexItem key={index} style={{ margin: '10px'}}  grow={false}>
      <EuiCard
        style={{ 
                padding: '20px', 
                height: 'auto', 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight:'210px'
              }}
        title=''
        description=''
      >
        <div style={{ alignItems: 'center', padding: '20px', marginTop: '-15px' }}>
          <Image
            src={item.image}
            alt={item.title}
            width={50}
            height={50}
            style={{ width: '35px', height: "35px",margin:'auto' }}
          />
          <h2 style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '22px' }}>{item.title}</h2>
          <EuiSpacer size='s'/>
          <p>{item.description}</p>
        </div>
      </EuiCard>
    </EuiFlexItem>
  );
});

const settings: Settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  cssEase: "linear",
  pauseOnFocus: true,
};

const AnalyticsSlider = () => (
  <div className="benefit-slider">
    <Slider {...settings}>
      {cardNodes}
    </Slider>
  </div>
);

export default AnalyticsSlider;
