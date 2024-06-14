import { useState } from "react";

const useFilterRate = () => {
  const [filterRate, setFilterRate] = useState(1);

  const handleRating = (rate) => setFilterRate(rate);

  return { filterRate, handleRating };
};

export default useFilterRate;
