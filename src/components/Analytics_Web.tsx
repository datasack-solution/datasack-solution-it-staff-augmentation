import { EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui"
import Image from "next/image"
import React from 'react'

const analyticsIcons1row=[
    {
      id:1,
      title:'Contract Staffing',
      description:'Access Skilled IT contractors to meet your project-based needs'
    },
    {
      id:3,
      title:'Remote Hiring',
      description:'Source and onboard talented IT professionals from anywhere in the world'
    },
  ]

  const analyticsIcons2row=[
    {
      id: 2,
      title: "Key Statistics",
      description: 'Experts ready in 2 weeks, 8% available to join instantly—rated 4.9/5 on Clutch'
    },
  ]

  const analyticsIcons3row=[
    {
      id:1,
      title:'Payroll Outsourcing',
      description:'Simplify payroll administration and ensure compliance'
    },
    {
      id:3,
      title:'Global Mobility',
      description:'Facilitate seamless employee relocation and cross-based assignments'
    }
  ]

const AnalyticsWeb = () =>{
    return <div id="window_view_analytics" style={{ backgroundColor: '#F4F4F4', padding: '20px', borderRadius: '8px' }}>
    <div style={{ paddingBottom: '30px' }}>
      <EuiCard hasBorder
        title=''
        style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}
      >
        <p style={{ fontSize: '28px', textAlign: 'center' }}>
          Augment your software team with IT professionals via IT Team Augmentation Services in Dammam and Riyadh.
        </p>
      </EuiCard>
    </div>

    <EuiFlexGroup gutterSize="l" justifyContent="center">
    <EuiFlexItem style={{ margin: '10px',width:'500px' }} grow={false}>
  <EuiCard
    style={{ 
      padding: '0px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '50px',  
      boxShadow: '5px 10px 10px rgba(7,0,0,0.3)', 
      textAlign: 'center'  
    }}
    title=''
    description=''
  >
    <div style={{ alignItems: 'center',padding:'20px',marginTop:'-15px' }}>
      <Image
        src={'/contract_staffing.png'} 
        alt={analyticsIcons1row[0].title} 
        width={50} 
        height={50} 
        style={{width:'35px',height:"35px"}}
      />
      <h2 style={{ fontWeight: 'bold', marginTop: '10px',fontSize:'22px' }}>{analyticsIcons1row[0].title}</h2>
      <p>{analyticsIcons1row[0].description}</p>
    </div>
  </EuiCard>
    </EuiFlexItem>
      <EuiFlexItem style={{ margin: '10px' }} grow={false}>
      </EuiFlexItem>
      <EuiFlexItem style={{ margin: '10px',width:'500px' }} grow={false}>
  <EuiCard
    style={{ 
      padding: '0px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '50px',  
      boxShadow: '5px 10px 10px rgba(7,0,0,0.3)', 
      textAlign: 'center'  
    }}
    title=''
    description=''
  >
    <div style={{ alignItems: 'center',padding:'20px',marginTop:'-15px' }}>
      <Image 
        src={'/remote_hiring.png'} 
        alt={analyticsIcons1row[0].title} 
        width={50} 
        height={50} 
        style={{width:'35px',height:"35px"}}
      />
      <h2 style={{ fontWeight: 'bold', marginTop: '10px',fontSize:'22px' }}>{analyticsIcons1row[1].title}</h2>
      <p>{analyticsIcons1row[1].description}</p>
    </div>
  </EuiCard>
</EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="l" justifyContent="center">
      <EuiFlexItem style={{ margin: '10px' }} grow={false}>
        {/* Empty Space */}
      </EuiFlexItem>
      <EuiFlexItem style={{ margin: '10px',width:'500px' }} grow={false}>
  <EuiCard
    style={{ 
      padding: '0px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '50px',  
      boxShadow: '5px 10px 10px rgba(7,0,0,0.3)', 
      textAlign: 'center'  
    }}
    title=''
    description=''
  >
    <div style={{ alignItems: 'center',padding:'20px',marginTop:'-15px' }}>
      <Image 
        src={'/key_statistics.png'} 
        alt={analyticsIcons2row[0].title} 
        width={50} 
        height={50} 
        style={{width:'35px',height:"35px"}}
      />
      <h2 style={{ fontWeight: 'bold', marginTop: '10px',fontSize:'22px' }}>{analyticsIcons2row[0].title}</h2>
      <p>{analyticsIcons2row[0].description}</p>
    </div>
  </EuiCard>
</EuiFlexItem>
      <EuiFlexItem style={{ margin: '10px' }} grow={false}>
        {/* Empty Space */}
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="l" justifyContent="center">
    <EuiFlexItem style={{ margin: '10px',width:'500px' }} grow={false}>
  <EuiCard
    style={{ 
      padding: '0px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '50px',  
      boxShadow: '5px 10px 10px rgba(7,0,0,0.3)', 
      textAlign: 'center'  
    }}
    title=''
    description=''
  >
    <div style={{ alignItems: 'center',padding:'20px',marginTop:'-15px' }}>
      <Image 
        src={'/payroll_outsourcing.png'} 
        alt={analyticsIcons3row[0].title} 
        width={50} 
        height={50} 
        style={{width:'35px',height:"35px"}}
      />
      <h2 style={{ fontWeight: 'bold', marginTop: '10px',fontSize:'22px' }}>{analyticsIcons3row[0].title}</h2>
      <p>{analyticsIcons3row[0].description}</p>
    </div>
  </EuiCard>
</EuiFlexItem>
      <EuiFlexItem style={{ margin: '10px' }} grow={false}>
      </EuiFlexItem>
      <EuiFlexItem style={{ margin: '10px',width:'500px' }} grow={false}>
  <EuiCard
    style={{ 
      padding: '0px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '50px',  
      boxShadow: '5px 10px 10px rgba(7,0,0,0.3)', 
      textAlign: 'center'  
    }}
    title=''
    description=''
  >
    <div style={{ alignItems: 'center',padding:'20px',marginTop:'-15px' }}>
      <Image 
        src={'/global_mobility.png'} 
        alt={analyticsIcons3row[1].title} 
        width={50} 
        height={50} 
        style={{width:'35px',height:"35px"}}
      />
      <h2 style={{ fontWeight: 'bold', marginTop: '10px',fontSize:'22px' }}>{analyticsIcons3row[1].title}</h2>
      <p>{analyticsIcons3row[1].description}</p>
    </div>
  </EuiCard>
</EuiFlexItem>
    </EuiFlexGroup>
  </div>
}

export default AnalyticsWeb