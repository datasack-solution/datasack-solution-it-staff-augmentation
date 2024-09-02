import { FunctionComponent, useState } from 'react';
import styles from '../styles/FabButton.module.css';
import Image from 'next/image';
import EnquiryModal from './EnquiryModal';

const FabButtonCallus:FunctionComponent = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div
    className={styles.fabButtonCallus}
    rel="noopener noreferrer"
  >
    <EnquiryModal isOpen={isModalOpen} closeModal={(isClosed) => { setIsModalOpen(!isClosed) }} customTechs={[]}  selectedRawTechData={{}}/>

    <Image width={200} height={200} src='/call-male.png' alt="home" onClick={()=>setIsModalOpen(true)}
    /> 
  </div>
}

export default FabButtonCallus
