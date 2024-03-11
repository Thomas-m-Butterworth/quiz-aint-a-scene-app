import {useEffect, useState} from 'react';

const useShuffledData = <T>(initialData: T[]): T[] => {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    setData(prevData => {
      let shuffledData = [...prevData];
      for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
      }
      return shuffledData;
    });
  }, []);

  return data;
};

export default useShuffledData;
