import { useState, useEffect, useRef } from "react";
import { getCountdown } from "../utils";

const useCountdown = (date: string) => {
  const [elapsed, setElapsed] = useState(() => Date.parse(date));
  const intervalRef = useRef<number>(0);
  useEffect(() => {
    intervalRef.current = window.setInterval(
      () => setElapsed(Date.parse(date) - Date.now()),
      1000
    );
    return () => clearInterval(intervalRef.current);
  }, [date]);
  const countSeconds = Math.floor(elapsed / 1000); //mills=>seconds
  if (countSeconds < 0) {
    clearInterval(intervalRef.current);
  }
  return getCountdown(countSeconds);
};
export default useCountdown;
