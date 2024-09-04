import { FunctionComponent, useState } from 'react';
import styles from '../styles/FabButton.module.css';
import Image from 'next/image';
import EnquiryModal from './EnquiryModal';
import { useCallusModalOpenedContext } from './callusModalContext';

const FabButtonCallus:FunctionComponent = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);
 const {setModalOpened}= useCallusModalOpenedContext()

  return <div
    className={styles.fabButtonCallus}
    rel="noopener noreferrer"
  >
    <EnquiryModal isOpen={isModalOpen} closeModal={(isClosed) => { setIsModalOpen(!isClosed) }} hasEnquiryWithSkillsets={false} customTechs={[]}  selectedRawTechData={{}} duration={[]}/>

    <Image width={200} height={200} src='/customer-service.png' alt="callus" onClick={()=>{
      setIsModalOpen(true);
      setModalOpened(true);
    }}
    /> 
  </div>
}

export default FabButtonCallus
