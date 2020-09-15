import { useState, useEffect } from "react";
import { getCountdown } from "../utils";

const useCountdown = (date: string) => {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    const handleElapsed = () => {
      setElapsed(Date.now() - elapsed);
    };
    const handle = setInterval(handleElapsed, 1000);
    return () => clearInterval(handle);
  }, []);
  const countSeconds = Math.floor((Date.parse(date) - elapsed) / 1000); //mills=>seconds
  return getCountdown(countSeconds);
};
export default useCountdown;
