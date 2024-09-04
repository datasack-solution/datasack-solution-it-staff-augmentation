import { useCallback, useEffect, useState } from 'react';
import { useCallusModalOpenedContext } from './callusModalContext';
import { useCurrentEuiBreakpoint } from '@elastic/eui';

const useModalOnScroll = (setIsModalOpen:(open:boolean)=>void) => {
    const currentBreakpoint = useCurrentEuiBreakpoint()
 
    const {isModelOpened,setModalOpened} =useCallusModalOpenedContext()
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setHasScrolled(true);
    },[]);
  
    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);

  useEffect(() => {
    const section = document.getElementById('contact-us');

    if (!section) return;

    if (isModelOpened){
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isModelOpened && (hasScrolled || (currentBreakpoint=='s' || currentBreakpoint=='xs'))) {
            console.log("entry isntersecting:",entry.isIntersecting)
          setIsModalOpen(true);
          setModalOpened(true);
        }
      },
      {
        root: null, 
        threshold: 1.0,
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [setIsModalOpen, setModalOpened, isModelOpened,hasScrolled, currentBreakpoint]);
};

export default useModalOnScroll;
