import { useEffect, useRef, useState } from 'react';

import Footer from '../footer';

export default function PageLayout(props: { header?: JSX.Element; children?: JSX.Element }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollDivRef: any = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const contentDiv: { scrollTop: number } = scrollDivRef.current;
      if (contentDiv) {
        if (contentDiv.scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    scrollDivRef?.current?.addEventListener('scroll', handleScroll);

    return () => {
      scrollDivRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className={`sticky left-0 top-0 right-0 z-20 ${isScrolled && `shadow-lg`}`}>{props.header}</div>
      <div ref={scrollDivRef} className='flex flex-col overflow-y-scroll overflow-x-hidden'>
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
