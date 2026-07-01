import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-14">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl w-28 h-28 sm:w-32 sm:h-32 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            {timeLeft[interval]}
          </span>
          <span className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-widest mt-1 sm:mt-2">
            {interval}
          </span>
        </div>
      ))}
    </div>
  );
}
