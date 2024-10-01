import { FunctionComponent } from 'react';
import styles from '../styles/FabButton.module.css';
import Image from 'next/image';

const FabButtonHome:FunctionComponent = () =>{
  const homeUrl = `https://datasack.in`;

  return <a
    className={styles.fabButtonHome}
    href={homeUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image width={300} height={300} src='/Icons/home.webp' alt="Tailor your workforce with IT Staff augmentation services Riyadh for maximum efficiency and flexibility." /> 
  </a>
}

export default FabButtonHome
