import {useState, useEffect} from 'react';

function useGetPositon() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {

    const getCurrentHeight = () =>{
      setScrollHeight(window.scrollY);
    }
    document.addEventListener('scroll', getCurrentHeight);

    return () => {
      document.removeEventListener('scroll', getCurrentHeight);
    }

  }, [scrollHeight])

  return scrollHeight;
}

export default useGetPositon;
