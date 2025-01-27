import {useEffect, useState} from 'react';

const useShuffledData = <T>(initialData: T[]): T[] => {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    let shuffledData = [...initialData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setData(shuffledData);
  }, [initialData]);

  return data;
};

export default useShuffledData;
