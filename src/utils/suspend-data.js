import { useState, useEffect } from "react";

const useSuspender = (parkingData, loading) => {
  const [currentData, setCurrentData] = useState(parkingData); 

  useEffect(() => {
    if (!loading && parkingData) {
      setCurrentData(parkingData); 
    }
  }, [parkingData, loading]);

  return [currentData]
}

export default useSuspender;