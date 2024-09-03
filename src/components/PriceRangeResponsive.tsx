import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';


export interface PriceRangeResponsiveProps{
  onDurationChange:(value:number|number[])=>void
}
const PriceRangeResponsive:FunctionComponent<PriceRangeResponsiveProps> = ({
  onDurationChange
}) => {
  const [value, setValue] = useState<number | number[]>(6);
  const [isClient,setClient]=useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    setClient(true)
  },[])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  useEffect(()=>{
    onDurationChange(value)
  },[value,onDurationChange])

  
  if (!isClient){
    return null
  }

  const marks = isMobile
    ? {
        1: '1',
        6: '6',
        12: '12',
        18: '18',
        24: '24+',
      }
    : {
        1: '1 month',
        6: '6 months',
        12: '1 year',
        18: '1.5 years',
        24: '2+ years',
      };

  return (
    <Fragment>
      <div style={{ marginBottom: '10px' }}>
        <strong> {value==24 && <>{value}+ Months</>}</strong>
        <strong>{value!=24 && <>{value} Months</>}</strong>
      </div>
      <Slider
        style={{ maxWidth: '80%' }}
        dots={!isMobile}
        included
        keyboard 
        pushable
        min={1}
        max={24}
        step={1}
        marks={marks}
        value={value}
        onChange={setValue}
      />
    </Fragment>
  );
};

export default PriceRangeResponsive;
